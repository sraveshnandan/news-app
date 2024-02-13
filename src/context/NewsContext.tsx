import { IArticle, INewsContextType } from "@/types";
import { fetchData, getNewsAPI, getNewsFromSourceAPI } from "@/utils/Api";
import React, { createContext, useEffect, useState } from "react";

export const NewsContext = createContext<INewsContextType | undefined>(
  undefined
);

export const NewsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dark, setDark] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [News, setNews] = useState<IArticle[]>();
  const [category, setCategory] = useState<string>("general");
  const [source, setSource] = useState<string>("google-news");

  const fetchNews = async () => {
    setLoading(true);
    const url = getNewsAPI(category);
    const responce = await fetchData(url);
    setNews(responce.articles.slice(0, 25));
    setLoading(false);
    setIndex(1);
    return responce;
  };
  const fetchNewsFromSource = async () => {
    setLoading(true);
    const url = getNewsFromSourceAPI(source);
    const responce = await fetchData(url);
    setNews(responce.articles.slice(0, 25));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchNews().then((res) => {
      setLoading(false);
      setNews(res.articles);
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    fetchNews().then((res) => {
      setLoading(false);
      console.log("This is the responce by Api", res.totalResults);
    });
  }, [category]);

  useEffect(() => {
    setLoading(true);
    fetchNewsFromSource().then(() => {
      setLoading(false);
      setIndex(1);
    });
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        News,
        loading,
        setLoading,
        dark,
        setDark,
        setNews,
        index,
        setIndex,
        setCategory,
        setSource,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
