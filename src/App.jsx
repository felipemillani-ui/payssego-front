import React, { useState, useMemo } from 'react';
import { Header } from './Header.jsx';
import { SearchBar } from './SearchBar.jsx';
import { CategoryFilter } from './CategoryFilter.jsx';
import { QACard } from './QACard.jsx';
import { Stats } from './Stats.jsx';
import { qnaData, categories } from './qnaData.js';
import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredQuestions = useMemo(() => {
    const s = searchTerm.trim().toLowerCase();
    return qnaData.filter((qa) => {
      const matchesSearch =
        !s ||
        qa.question.toLowerCase().includes(s) ||
        qa.answer.toLowerCase().includes(s) ||
        qa.tags?.some((t) => t.toLowerCase().includes(s));

      const matchesCategory =
        selectedCategory === 'Todas' || qa.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-page py-8 space-y-6">
        {/* Busca + Filtro em cards */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="card p-4 md:col-span-2">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Pesquisar por pergunta, resposta ou tag…"
            />
          </div>

          <div className="card p-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </section>

        {/* Estatísticas */}
        <section>
          <Stats
            totalQuestions={qnaData.length}
            filteredQuestions={filteredQuestions.length}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
          />
        </section>

        {/* Lista de perguntas/respostas */}
        <section className="space-y-3">
          {filteredQuestions.length ? (
            filteredQuestions.map((qa) => <QACard key={qa.id} qa={qa} />)
          ) : (
            <div className="card p-8 text-center">
              <p className="text-lg font-semibold">Nenhuma pergunta encontrada</p>
              <p className="subtle mt-1">
                Tente ajustar sua busca ou selecionar outra categoria.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-muted/30 border-t mt-16">
        <div className="container-page py-8 text-center">
          <p className="subtle">
            Sistema de Q&A da Payssego — feito para acelerar atendimento e vendas.
          </p>
        </div>
      </footer>
    </div>
  );
}
