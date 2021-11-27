import { Theme, PickTheme } from './theme.js';

const players = {
  windows95: document.querySelector('.windows-95-player') as HTMLElement,
  modern: document.querySelector('.modern-player') as HTMLElement,
  retro: document.querySelector('.retro-player') as HTMLElement,
};

document.addEventListener('DOMContentLoaded', () => {
  const localTheme = localStorage.getItem('theme');
  const theme = new Theme(localTheme as PickTheme);

  switch (theme.theme) {
    case 'windows95':
      players.windows95.style.display = 'grid';

      players.modern.style.display = 'none';
      players.retro.style.display = 'none';

      break;

    case 'modern':
      players.windows95.style.display = 'grid';
      players.modern.style.display = 'none';
      players.retro.style.display = 'none';

      break;

    case 'retro':
      players.windows95.style.display = 'grid';
      players.modern.style.display = 'none';
      players.retro.style.display = 'none';
      break;
  }

  theme.cycle();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const register = await navigator.serviceWorker.register(
        '/serviceWorker.js'
      );

      console.log(register);
    } catch (error) {
      console.log(error);
    }
  });
}
