import { Theme, PickTheme } from './theme.js';
import { useMedia, useScreenType } from './hooks/useMedia.js';

const players = {
  windows95: document.querySelector('.windows-95-player') as HTMLElement,
  modern: document.querySelector('.modern-player') as HTMLElement,
  retro: document.querySelector('.retro-player') as HTMLElement,
};

const dottedGrid = document.querySelector('.dotted-grid')!;

const renderDots = () => {
  const { gridTemplateColumns } = window.getComputedStyle(dottedGrid);

  const cols = gridTemplateColumns.split(' ').length;
  const rows = cols + 2;

  const dotAmount = rows * cols;

  const allDots = document.querySelectorAll('.dot');

  allDots.forEach(dot => {
    dot.remove();
  });

  for (let i = 0; i < dotAmount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    dottedGrid?.appendChild(dot);
  }
  /* JUST GET the computed style of grids and rows */
};
/**
 * TODO: listen to window size change
 * get the current size of the window and get the closest media query
 * render the dots accordingly
 * whenever window changes re-render
 */
const render = () => {
  const width = window.innerWidth;

  if (window.matchMedia('(max-width: 481px)').matches) {
    renderDots();
  } else {
    const closest = useMedia({
      width,
    });

    switch (closest) {
      case 'smallMobile':
        renderDots();
        break;
      case 'smallTablet':
        renderDots();
        break;

      case 'smallLaptop':
        renderDots();
        break;

      case 'largeLaptop':
        renderDots();
        break;
      case 'ExtraLargeDesktop':
        renderDots(5);
        break;
    }
  }
};

render();

window.onresize = () => {
  render();
};

document.addEventListener('DOMContentLoaded', () => {
  const localTheme = localStorage.getItem('theme');
  const theme = new Theme(localTheme as PickTheme);

  switch (theme.theme) {
    case 'windows95':
      players.windows95.style.display = 'none';

      players.modern.style.display = 'grid';
      players.retro.style.display = 'none';

      break;

    case 'modern':
      players.windows95.style.display = 'none';
      players.modern.style.display = 'grid';
      players.retro.style.display = 'none';

      break;

    case 'retro':
      players.windows95.style.display = 'none';
      players.modern.style.display = 'grid';
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
