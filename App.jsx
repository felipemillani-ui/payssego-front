import { useState, useMemo } from 'react';
import { Header } from './components/Header.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { CategoryFilter } from './components/CategoryFilter.jsx';
import { QACard } from './components/QACard.jsx';
import { Stats } from './components/Stats.jsx';
import { qnaData, categories } from './data/qnaData.js';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredQuestions = useMemo(() => {
    return qnaData.filter((qa) => {
      const matchesSearch = 
        qa.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Todas' || qa.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Controles de busca e filtro */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Pesquisar por pergunta, resposta ou tag..."
            />
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Estatísticas */}
          <Stats 
            totalQuestions={qnaData.length}
            filteredQuestions={filteredQuestions.length}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
          />

          {/* Lista de perguntas e respostas */}
          <div className="space-y-4">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((qa) => (
                <QACard key={qa.id} qa={qa} />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="bg-muted/50 rounded-lg p-8 max-w-md mx-auto">
                  <p className="text-muted-foreground text-lg mb-2">
                    Nenhuma pergunta encontrada
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tente ajustar sua busca ou selecionar uma categoria diferente.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Sistema de Q&A da Payssego - Desenvolvido para facilitar o atendimento e vendas
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

