export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  url: string;
  source: string;
  category: 'startups' | 'research' | 'tools';
  publishedAt: string;
  upvotes?: number;
  comments?: number;
  author?: string;
  imageUrl?: string;
}

export type CategoryFilter = 'all' | 'startups' | 'research' | 'tools';
export type TimeFilter = '1day' | '30days' | '1year';

export interface FilterState {
  category: CategoryFilter;
  timeRange: TimeFilter;
  searchQuery: string;
}