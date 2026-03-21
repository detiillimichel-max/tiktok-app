'use client';
import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white p-6 flex flex-col items-center justify-center font-sans">
      {/* O Círculo de Identidade OIO ONE */}
      <div className="w-48 h-48 bg-cyan-950 rounded-full flex items-center justify-center mb-8 border-4 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-pulse">
        <h1 className="text-[120px] font-black text-cyan-400 leading-none">O</h1>
      </div>

      {/* Título e Conceito */}
      <h2 className="text-5xl font-bold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500">
        OIO ONE
      </h2>
      <p className="text-xl text-cyan-200/80 mb-10 font-light">
        Interface Orgânica por Profundidade
      </p>

      {/* Painel de Controle do Autor */}
      <div className="mt-6 p-8 border border-cyan-800/50 rounded-3xl bg-cyan-950/10 max-w-md text-center backdrop-blur-sm">
        <p className="text-base text-gray-300 leading-relaxed">
          Olá, <span className="text-cyan-400 font-bold">Michel</span>! ✨<br />
          O seu projeto está oficialmente <strong className="text-green-400 underline decoration-2 underline-offset-4">PRONTO PARA DECOLAR</strong> na Vercel. 
        </p>
        
        <div className="mt-8 flex gap-4 justify-center">
          <div className="px-4 py-2 bg-cyan-900/30 rounded-full border border-cyan-500/30 text-xs text-cyan-300">
            Autor: detillimichel-max
          </div>
        </div>
      </div>

      {/* Rastro do Motor */}
      <p className="mt-12 text-[10px] text-zinc-600 tracking-[0.3em] uppercase">
        Powered by Vercel & Michel Detilli
      </p>
    </div>
  );
}
