import { articles } from "../data/articles"
import { IArticle } from "../models/article"


export const Article = ({id, title, description, image, author} : IArticle) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
      <a href="#">
          <img className="rounded-t-lg mx-auto pt-5" src={image} alt={title} />
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ title }</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ description }</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-blue-400">Издательство: { author }</p>
      </div>
    </div>
  )
}