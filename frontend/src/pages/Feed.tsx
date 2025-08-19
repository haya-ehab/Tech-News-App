import { useState, useEffect, useMemo } from 'react';
import { NewsCard } from '../components/NewsCard';
import { FilterBar } from '../components/FilterBar';
import { mockNewsData } from '../data/mockNews';
import { CategoryFilter, TimeFilter, NewsArticle } from '../types/news';
import { subDays, subYears, isAfter } from 'date-fns';

export const Feed = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [activeTimeRange, setActiveTimeRange] = useState<TimeFilter>('30days');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  // Load bookmarks from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('techpulse-bookmarks');
    if (stored) {
      setBookmarkedIds(new Set(JSON.parse(stored)));
    }
  }, []);

  // Save bookmarks to localStorage
  const saveBookmarks = (bookmarks: Set<string>) => {
    localStorage.setItem('techpulse-bookmarks', JSON.stringify(Array.from(bookmarks)));
  };

  const toggleBookmark = (articleId: string) => {
    const newBookmarks = new Set(bookmarkedIds);
    if (newBookmarks.has(articleId)) {
      newBookmarks.delete(articleId);
    } else {
      newBookmarks.add(articleId);
    }
    setBookmarkedIds(newBookmarks);
    saveBookmarks(newBookmarks);
  };

  const filteredArticles = useMemo(() => {
    let filtered = mockNewsData;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(article => article.category === activeCategory);
    }

    // Filter by time range
    const now = new Date();
    let cutoffDate: Date;
    
    switch (activeTimeRange) {
      case '1day':
        cutoffDate = subDays(now, 1);
        break;
      case '30days':
        cutoffDate = subDays(now, 30);
        break;
      case '1year':
        cutoffDate = subYears(now, 1);
        break;
      default:
        cutoffDate = subDays(now, 30);
    }

    filtered = filtered.filter(article => 
      isAfter(new Date(article.publishedAt), cutoffDate)
    );

    // Sort by publication date (newest first)
    return filtered.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [activeCategory, activeTimeRange]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <FilterBar
        activeCategory={activeCategory}
        activeTimeRange={activeTimeRange}
        onCategoryChange={setActiveCategory}
        onTimeRangeChange={setActiveTimeRange}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="font-heading font-bold text-2xl text-news-text-primary mb-2">
            Latest Tech News
          </h1>
          <p className="text-news-text-secondary">
            Showing {filteredArticles.length} articles from the best tech sources
          </p>
        </div>

        <div className="grid gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(article => (
              <div key={article.id} className="animate-fade-in">
                <NewsCard
                  article={article}
                  isBookmarked={bookmarkedIds.has(article.id)}
                  onToggleBookmark={toggleBookmark}
                />
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-news-text-muted text-lg mb-2">No articles found</p>
              <p className="text-news-text-muted text-sm">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};