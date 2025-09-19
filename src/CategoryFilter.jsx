import { Button } from './ui/button.jsx';
import { Badge } from './ui/badge.jsx';

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-200 hover:scale-105"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

