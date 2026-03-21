"use client";
import React from 'react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center">
      <div className="w-24 h-24 bg-cyan-500 rounded-full mb-4 shadow-[0_0_20px_#00e5ff]"></div>
      <h1 className="text-2xl font-bold">Michel Detilli</h1>
      <p className="text-zinc-500 text-sm">@oio_one_autor</p>
      <div className="mt-10 grid grid-cols-3 gap-1 w-full max-w-md">
        <div className="aspect-square bg-zinc-900 border border-zinc-800"></div>
        <div className="aspect-square bg-zinc-900 border border-zinc-800"></div>
        <div className="aspect-square bg-zinc-900 border border-zinc-800"></div>
      </div>
    </div>
  );
}
