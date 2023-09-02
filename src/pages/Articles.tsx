import { IArticle } from "../models/article"
import { articles as data } from "../data/articles"
import { Article } from "../components/Article";
import { useState } from "react";

export const Articles = () => {

  const [articles, setArticles] = useState<IArticle[]>(data);

  return (
    <div className="max-w-2xl container mx-auto pt-5">
       {articles &&
        articles.map((article: IArticle) => (
          <Article
            id={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            author={article.author}
          />
        ))}
    </div>
  )
}