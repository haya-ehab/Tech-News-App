import { Search, Bookmark, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-news-border-subtle">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 group">
            <TrendingUp className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-heading font-bold text-xl text-news-text-primary">
            FutureCast
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-news-text-secondary'
              }`}
            >
              Feed
            </Link>
            <Link 
              to="/bookmarks" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/bookmarks' ? 'text-primary' : 'text-news-text-secondary'
              }`}
            >
              Bookmarks
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 bg-news-surface rounded-lg px-3 py-2 min-w-[200px]">
            <Search className="h-4 w-4 text-news-text-muted" />
            <input
              type="text"
              placeholder="Search tech news..."
              className="bg-transparent text-sm text-news-text-primary placeholder:text-news-text-muted border-none outline-none flex-1"
            />
          </div>
          
          <Link 
            to="/bookmarks"
            className="p-2 rounded-lg hover:bg-news-surface transition-colors"
          >
            <Bookmark className="h-5 w-5 text-news-text-secondary hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </header>
  );
};