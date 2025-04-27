export interface Article {
  id: number;
  title: string;
  abstract: string;
  url: string;
  published_date: string;
  media?: {
    "media-metadata": { url: string }[];
  }[];
}

export interface ArticleApiResponse {
  results: Article[];
}

export interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  mediumImageUrl: string;
  date: string;
  link: string;
  author?: string;
  byline?: string;
}

export interface MediaMetadata {
  url: string;
  format?: string;
  height?: number;
  width?: number;
}

export interface Media {
  type?: string;
  subtype?: string;
  caption?: string;
  copyright?: string;
  "media-metadata"?: MediaMetadata[];
}

export interface ArticleListProps {
  articles: Article[];
}

export interface ArticleSkeletonListProps {
  count: number;
}
