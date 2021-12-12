import { useConsole } from './hooks/useConsole.js';

export class PWA {
  constructor() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          const register = await navigator.serviceWorker.register(
            '/serviceWorker.js'
          );

          useConsole.log({
            type: 'PWA',
            message: register,
          });
        } catch (error) {
          useConsole.error({
            type: 'PWA',
            message: error,
          });
        }
      });
    }
  }
}
