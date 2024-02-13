import { ICategory, ICountry, ISources } from "@/types";

export const categories: ICategory[] = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country: ICountry[] = [
  {
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
];

export const sources: ISources[] = [
  {
    id: "bbc-news",
    name: "BBC News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: "cnn",
    name: "CNN",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1920px-CNN.svg.png",
  },
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "google-news",
    name: "Google News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
  },
  {
    id: "bbc-sport",
    name: "BBC Sports",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/BBC_Sport_2017.svg/800px-BBC_Sport_2017.svg.png",
  },
  {
    id:"bloomberg",
    name:"Bloomberg",
    pic:"https://upload.wikimedia.org/wikipedia/commons/5/5d/New_Bloomberg_Logo.svg"
  }
];

export const BASE_URL: string = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category: string, country = "in") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getNewsFromSourceAPI = (source: string) => {
  return `${BASE_URL}/everything/${source}.json`;
};

export const fetchData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
