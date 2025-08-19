import { useState, useEffect, useMemo } from 'react';
import { NewsCard } from '../components/NewsCard';
import { mockNewsData } from '../data/mockNews';
import { BookmarkX, Heart } from 'lucide-react';

export const Bookmarks = () => {
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

  const bookmarkedArticles = useMemo(() => {
    return mockNewsData
      .filter(article => bookmarkedIds.has(article.id))
      .sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }, [bookmarkedIds]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-8 w-8 text-bookmark" />
            <h1 className="font-heading font-bold text-3xl text-news-text-primary">
              Your Bookmarks
            </h1>
          </div>
          <p className="text-news-text-secondary">
            {bookmarkedArticles.length > 0 
              ? `${bookmarkedArticles.length} saved article${bookmarkedArticles.length === 1 ? '' : 's'}`
              : 'No bookmarked articles yet'
            }
          </p>
        </div>

        <div className="grid gap-6">
          {bookmarkedArticles.length > 0 ? (
            bookmarkedArticles.map(article => (
              <div key={article.id} className="animate-fade-in">
                <NewsCard
                  article={article}
                  isBookmarked={true}
                  onToggleBookmark={toggleBookmark}
                />
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <BookmarkX className="h-16 w-16 text-news-text-muted mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-xl text-news-text-secondary mb-2">
                No bookmarks yet
              </h3>
              <p className="text-news-text-muted mb-6 max-w-md mx-auto">
                Start bookmarking interesting articles from the feed to build your personal collection.
              </p>
              <a 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Browse Tech News
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};