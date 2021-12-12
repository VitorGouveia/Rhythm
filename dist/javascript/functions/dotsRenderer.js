import { useMedia } from '../hooks/useMedia.js';
export class DotsRenderer {
    constructor() {
        const dottedGrid = document.querySelector('.dotted-grid');
        const renderDots = () => {
            const { gridTemplateColumns } = window.getComputedStyle(dottedGrid);
            const cols = gridTemplateColumns.split(' ').length;
            const rows = cols - 2;
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
                renderDots();
            }
            else {
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
                        renderDots();
                        break;
                }
            }
        };
        render();
        window.onresize = () => {
            render();
        };
    }
}
