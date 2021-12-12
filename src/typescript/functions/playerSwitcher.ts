import { Theme } from '../theme';

export class PlayerSwitcher {
  constructor(theme: Theme) {
    const $ = document.querySelector.bind(document);

    const players = {
      windows95: $('.windows-95-player') as HTMLElement,
      modern: $('.modern-player') as HTMLElement,
      retro: $('.retro-player') as HTMLElement,
    };

    const showPlayer = (player: keyof typeof players) => {
      /* hide the other players */
      const playersArray = Object.entries(players);

      playersArray.map(([name, element]) => {
        if (name !== player) {
          element.style.display = 'none';
        }
      });

      players[player].style.display = 'grid';
    };

    switch (theme.theme) {
      case 'windows95': {
        showPlayer('windows95');
        break;
      }

      case 'modern': {
        showPlayer('modern');
        break;
      }

      case 'retro': {
        showPlayer('retro');
        break;
      }
    }
  }
}
