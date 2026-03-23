import PocketBase from 'pocketbase';

// OIO ONE - Motor de Conexão (Vibe Sync)
// Regra: Arquivo único e definitivo.

const pb = new PocketBase('https://vibe-mensagens.pockethost.io');

export default pb;

