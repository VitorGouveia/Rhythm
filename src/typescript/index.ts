import { PWA } from './pwa.js';
import { Theme, PickTheme } from './theme.js';
import { DotsRenderer } from './functions/dotsRenderer.js';
import { PlayerSwitcher } from './functions/playerSwitcher.js';

/* Initialize PWA */
new PWA();

/* Initialize Theme */
const localTheme = localStorage.getItem('theme') as PickTheme;

let theme = new Theme();

if (localTheme) {
  theme = new Theme(localTheme);
}

theme.cycle();

new PlayerSwitcher(theme);
new DotsRenderer();
