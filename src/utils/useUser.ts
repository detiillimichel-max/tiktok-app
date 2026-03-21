import { useState, useEffect } from 'react';

export function useUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Simulação de usuário para o app carregar
    setUser({ id: '1', name: 'Michel - OIO ONE', photo: '' });
  }, []);

  return { user };
}

export function useUserProtected() {
  const { user } = useUser();
  return { user };
}
