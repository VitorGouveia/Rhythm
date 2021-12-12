import { PWA } from './pwa.js';
import { Theme } from './theme.js';
import { DotsRenderer } from './functions/dotsRenderer.js';
import { PlayerSwitcher } from './functions/playerSwitcher.js';
new PWA();
const localTheme = localStorage.getItem('theme');
let theme = new Theme();
if (localTheme) {
    theme = new Theme(localTheme);
}
theme.cycle();
new PlayerSwitcher(theme);
new DotsRenderer();
