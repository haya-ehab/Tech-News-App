import { ExternalLink, MessageCircle, ArrowUp, Bookmark, Clock } from 'lucide-react';
import { NewsArticle } from '../types/news';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  article: NewsArticle;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const NewsCard = ({ article, isBookmarked, onToggleBookmark }: NewsCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'startups':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'research':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tools':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-news-accent text-news-accent-foreground border-news-border-subtle';
    }
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-200 border-card-border bg-gradient-card">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            <span className="text-xs text-news-text-muted">{article.source}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onToggleBookmark(article.id)}
            className={`p-1 h-auto hover:bg-news-surface ${
              isBookmarked ? 'text-bookmark' : 'text-news-text-muted hover:text-bookmark'
            }`}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </Button>
        </div>

        <h3 className="font-heading font-semibold text-lg text-news-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        
        <p className="text-news-text-secondary text-sm mb-4 line-clamp-3">
          {article.summary}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-news-text-muted">
            {article.author && (
              <span>by {article.author}</span>
            )}
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {article.upvotes && (
              <div className="flex items-center space-x-1 text-xs text-news-text-muted">
                <ArrowUp className="h-3 w-3" />
                <span>{article.upvotes}</span>
              </div>
            )}
            
            {article.comments && (
              <div className="flex items-center space-x-1 text-xs text-news-text-muted">
                <MessageCircle className="h-3 w-3" />
                <span>{article.comments}</span>
              </div>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(article.url, '_blank')}
              className="p-1 h-auto text-news-text-muted hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};