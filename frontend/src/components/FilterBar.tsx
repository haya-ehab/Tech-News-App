import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CategoryFilter, TimeFilter } from '../types/news';
import { Calendar, Filter, X } from 'lucide-react';

interface FilterBarProps {
  activeCategory: CategoryFilter;
  activeTimeRange: TimeFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  onTimeRangeChange: (timeRange: TimeFilter) => void;
}

const categories: { id: CategoryFilter; label: string; count?: number }[] = [
  { id: 'all', label: 'All', count: 8 },
  { id: 'startups', label: 'Startups', count: 3 },
  { id: 'research', label: 'Research', count: 3 },
  { id: 'tools', label: 'Tools', count: 2 },
];

const timeRanges: { id: TimeFilter; label: string }[] = [
  { id: '1day', label: '24 hours' },
  { id: '30days', label: '30 days' },
  { id: '1year', label: '1 year' },
];

export const FilterBar = ({
  activeCategory,
  activeTimeRange,
  onCategoryChange,
  onTimeRangeChange,
}: FilterBarProps) => {
  const hasActiveFilters = activeCategory !== 'all' || activeTimeRange !== '30days';

  return (
    <div className="bg-news-surface border-b border-news-border-subtle py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-news-text-muted" />
            <span className="text-sm font-medium text-news-text-secondary">Filters:</span>
            
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onCategoryChange('all');
                  onTimeRangeChange('30days');
                }}
                className="h-6 px-2 text-xs text-news-text-muted hover:text-primary"
              >
                <X className="h-3 w-3 mr-1" />
                Clear
              </Button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-news-text-muted">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onCategoryChange(category.id)}
                  className={`h-7 text-xs ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-transparent border-news-border-subtle text-news-text-secondary hover:bg-news-surface-hover'
                  }`}
                >
                  {category.label}
                  {category.count && (
                    <Badge 
                      variant="secondary" 
                      className="ml-1 h-4 px-1 text-[10px] bg-news-accent text-news-accent-foreground"
                    >
                      {category.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="h-3 w-3 text-news-text-muted" />
              <span className="text-xs text-news-text-muted">Time:</span>
              {timeRanges.map((timeRange) => (
                <Button
                  key={timeRange.id}
                  variant={activeTimeRange === timeRange.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onTimeRangeChange(timeRange.id)}
                  className={`h-7 text-xs ${
                    activeTimeRange === timeRange.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-transparent border-news-border-subtle text-news-text-secondary hover:bg-news-surface-hover'
                  }`}
                >
                  {timeRange.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};