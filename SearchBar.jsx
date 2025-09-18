import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input.jsx';

export function SearchBar({ searchTerm, onSearchChange, placeholder = "Pesquisar perguntas..." }) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-4 py-2 w-full"
      />
    </div>
  );
}

