import { HelpCircle, Lightbulb } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary-foreground/20 p-2 rounded-lg">
            <HelpCircle className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Payssego Q&A</h1>
            <p className="text-primary-foreground/80">Sistema de Objeções e Respostas</p>
          </div>
        </div>
        
        <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 mt-0.5 text-yellow-300" />
            <div>
              <p className="text-sm leading-relaxed">
                Encontre respostas rápidas e precisas para todas as objeções relacionadas à Payssego. 
                Use a busca ou filtre por categoria para encontrar exatamente o que precisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

