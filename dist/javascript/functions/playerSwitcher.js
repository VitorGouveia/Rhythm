export class PlayerSwitcher {
    constructor(theme) {
        const $ = document.querySelector.bind(document);
        const players = {
            windows95: $('.windows-95-player'),
            modern: $('.modern-player'),
            retro: $('.retro-player'),
        };
        const showPlayer = (player) => {
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
