import React from "react";
import { ArticleCardProps } from "../../types/articleTypes";
import { READ_MORE } from "../../constants";

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  mediumImageUrl,
  date,
  link,
  author
}) => {
  return (
    <article className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet={imageUrl} />
          <source media="(min-width: 640px)" srcSet={mediumImageUrl} />
          <img
            src={mediumImageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </picture>
      </div>

      <div className="flex flex-col flex-grow p-4">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
          {author && <p className="text-sm text-gray-600 mb-2">{author}</p>}
          <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <time className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
          >
            {READ_MORE}
          </a>
        </div>
      </div>
    </article>
  );
};
