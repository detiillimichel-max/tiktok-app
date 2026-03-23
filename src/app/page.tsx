'use client';

import React, { useState } from 'react';

// OIO ONE - DNA: Interface Orgânica por Profundidade
// Autor: Michel | Design: Dark Mode Profissional (v0 inspired)

export default function OioOneMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Simulando os 4 últimos contatos (Vibe Sync)
  const lastContacts = [
    { id: 1, img: 'https://i.pravatar.cc/150?u=dan', name: 'Daniel' },
    { id: 2, img: 'https://i.pravatar.cc/150?u=gaby', name: 'Gaby' },
    { id: 3, img: 'https://i.pravatar.cc/150?u=raf', name: 'Rafael' },
    { id: 4, img: 'https://i.pravatar.cc/150?u=mic', name: 'Michel' },
  ];

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden font-sans tracking-tighter text-white">
      
      {/* CAMADA 0: FEED DE VÍDEO (70%) */}
      <section className="relative h-[70vh] w-full">
        <video 
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-oio.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        
        {/* LISTA DE CONTATOS (LADO ESQUERDO - ORGÂNICO) */}
        <div className="absolute left-6 bottom-20 flex flex-col space-y-4 z-20">
          {lastContacts.map((contact) => (
            <div key={contact.id} className="group relative">
              <div className="w-12 h-12 rounded-full border-2 border-white/10 p-0.5 bg-zinc-900/50 backdrop-blur-md transition-transform active:scale-90">
                <img src={contact.img} alt={contact.name} className="w-full h-full rounded-full object-cover shadow-2xl" />
              </div>
              <span className="absolute left-14 top-3 text-xs bg-black/40 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {contact.name}
              </span>
            </div>
          ))}
          <button className="w-12 h-12 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md text-white/50 active:scale-90">
            <span className="text-xl font-light">+</span>
          </button>
        </div>
      </section>

      {/* CAMADA 1: GAVETA DE VIDRO (IDENTITY LAYER) */}
      <section className="absolute bottom-0 w-full h-[35vh] bg-zinc-950/60 backdrop-blur-[40px] border-t border-white/10 rounded-t-[3rem] z-30 transition-all duration-500">
        
        {/* ALÇA DE ARRASTE (ERGONOMIA DINÂMICA) */}
        <div className="w-full flex justify-center p-4">
          <div className="w-12 h-1 bg-white/10 rounded-full" />
        </div>

        <div className="px-8 flex flex-col h-full">
          {/* BARRA DE BUSCA (ESTILO v0) */}
          <div className="relative mb-6">
            <input 
              type="text" 
              placeholder="Search contacts or groups" 
              className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 px-10 text-sm text-zinc-400 focus:outline-none focus:border-white/20 transition-all"
            />
            <svg className="absolute left-3 top-3 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>

          {/* PERFIL E MENU (FOTO v0) */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full border-2 border-emerald-500/30 p-1 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <img src="https://i.pravatar.cc/150?u=michel" className="w-full h-full rounded-full object-cover" alt="Michel" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter uppercase leading-none">MICHEL</h2>
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase mt-1">Identity Layer</p>
              </div>
            </div>

            {/* MENU TRÊS PONTOS (DIREITA) */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors relative"
            >
              <div className="flex flex-col space-y-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>

              {/* DROPDOWN MENU (NAVEGAÇÃO) */}
              {menuOpen && (
                <div className="absolute bottom-14 right-0 w-48 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl animate-in fade-in zoom-in duration-200">
                  <button className="w-full text-left px-4 py-2 hover:bg-white/5 rounded-xl text-sm transition-colors">Buscar Contatos</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-white/5 rounded-xl text-sm transition-colors text-emerald-500">Vibe Sync</button>
                  <div className="h-[1px] bg-white/5 my-2" />
                  <button className="w-full text-left px-4 py-2 hover:bg-white/5 rounded-xl text-sm text-red-400">Logout</button>
                </div>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* EFEITOS DE PROFUNDIDADE (SOMBRA LATERAL) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-10" />
    </main>
  );
}
