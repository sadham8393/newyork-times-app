import { ArticleListProps } from "../../types/articleTypes";
import { ArticleCard } from "./ArticleCard";

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6">
      {articles.map((article) => {
        const mediaMeta = article.media?.[0]?.["media-metadata"] ?? [];

        const imageUrl =
          mediaMeta[2]?.url ||
          mediaMeta[1]?.url ||
          mediaMeta[0]?.url ||
          "https://via.placeholder.com/600x400?text=No+Image";

        const mediumImageUrl =
          mediaMeta[1]?.url ||
          mediaMeta[0]?.url ||
          imageUrl;

        return (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.abstract}
            imageUrl={imageUrl}
            mediumImageUrl={mediumImageUrl}
            date={article.published_date}
            link={article.url}
          />
        );
      })}
    </div>
  );
}
