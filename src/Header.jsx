// src/Header.jsx
import logoUrl from './assets/logo1.png';    // caminho relativo ao arquivo
import { Lightbulb } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="container-page py-5">
        <div className="flex items-center justify-between gap-4">
          {/* bloco da marca */}
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Payssego"
              className="h-9 w-auto select-none"
              draggable="false"
            />
            <div className="leading-tight">
              <h1 className="text-2xl font-extrabold tracking-tight">Payssego Q&A</h1>
              <p className="subtle">Sistema de Objeções e Respostas</p>
            </div>
          </div>

          {/* CTA opcional */}
          <button className="btn btn-primary">
            Abrir guia rápido
          </button>
        </div>

        {/* hint sutil (remove se não quiser) */}
        <div className="mt-4 card p-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Use a busca ou filtre por categoria para encontrar respostas em segundos.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
