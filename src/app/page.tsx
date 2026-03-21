"use client";
import React from 'react';

export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#000', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: '#00e5ff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>OIO ONE</h1>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          backgroundColor: '#00e5ff', 
          borderRadius: '50%', 
          margin: '20px auto',
          boxShadow: '0 0 30px #00e5ff',
          animation: 'pulse 2s infinite'
        }}></div>
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>Sincronizando Motor Municipal...</p>
      </div>
      
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 229, 255, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(0, 229, 255, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 229, 255, 0); }
        }
      `}</style>
    </main>
  );
}
