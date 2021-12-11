var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Theme } from './theme.js';
import { useMedia } from './hooks/useMedia.js';
const players = {
    windows95: document.querySelector('.windows-95-player'),
    modern: document.querySelector('.modern-player'),
    retro: document.querySelector('.retro-player'),
};
const dottedGrid = document.querySelector('.dotted-grid');
const renderDots = (rows, cols) => {
    const dotAmount = rows * cols;
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach(dot => {
        dot.remove();
    });
    for (let i = 0; i < dotAmount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dottedGrid === null || dottedGrid === void 0 ? void 0 : dottedGrid.appendChild(dot);
    }
};
const render = () => {
    const width = window.innerWidth;
    if (window.matchMedia('(max-width: 481px)').matches) {
        renderDots(8, 5);
    }
    else {
        const closest = useMedia({
            width,
        });
        switch (closest) {
            case 'smallMobile':
                renderDots(5, 5);
                break;
            case 'smallTablet':
                renderDots(13, 9);
                break;
            case 'smallLaptop':
                renderDots(13, 9);
                break;
            case 'largeLaptop':
                renderDots(13, 9);
                break;
            case 'ExtraLargeDesktop':
                renderDots(13, 15);
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
    const theme = new Theme(localTheme);
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
    window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const register = yield navigator.serviceWorker.register('/serviceWorker.js');
            console.log(register);
        }
        catch (error) {
            console.log(error);
        }
    }));
}
