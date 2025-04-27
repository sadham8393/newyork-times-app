import { ArticleSkeletonListProps } from "../../types/articleTypes";

export const ArticleSkeletonList = ({ count }: ArticleSkeletonListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          data-testid="article-skeleton"
          key={idx}
          className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse flex flex-col"
        >
          <div className="w-full h-48 bg-gray-300"></div>
          <div className="p-4 flex-col">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
