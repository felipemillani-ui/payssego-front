import { Card, CardContent } from '@/components/ui/card.jsx';
import { FileText, Filter, Search } from 'lucide-react';

export function Stats({ totalQuestions, filteredQuestions, selectedCategory, searchTerm }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total de Perguntas</p>
              <p className="text-2xl font-bold">{totalQuestions}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
              <Filter className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Categoria Ativa</p>
              <p className="text-lg font-semibold">{selectedCategory}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg">
              <Search className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Resultados</p>
              <p className="text-2xl font-bold">{filteredQuestions}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

