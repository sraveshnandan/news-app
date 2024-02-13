import React from "react";

export interface INewsContextType {
  News?: IArticle[] | undefined;
  dark?: boolean;
  setDark?: React.Dispatch<React.SetStateAction<boolean>>;
  index?: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex?: React.Dispatch<React.SetStateAction<number>>;
  setNews?: React.Dispatch<React.SetStateAction<IArticle[] | undefined>>;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
  setSource?: React.Dispatch<React.SetStateAction<string>>;
}
export interface IArticle {
  source: {
    id?: string;
    name?: string;
  };
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface ICategory {
  code?: string;
  pic: string;
  name: string;
}
export interface ICountry {
  code: string;
  name: string;
}

export interface ISources {
  id: string;
  name: string;
  pic: string;
}
