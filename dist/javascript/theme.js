export class Theme {
    constructor(theme) {
        this.theme = this.getStorageTheme();
        this.defaultTheme = 'windows95';
        this.availableThemes = {
            windows95: 'windows95',
            modern: 'modern',
            retro: 'retro',
        };
        let newTheme = theme || this.theme;
        if (!this.availableThemes[newTheme]) {
            newTheme = this.defaultTheme;
        }
        this.setTheme(newTheme);
    }
    setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('theme', theme);
        document.body.setAttribute('data-theme', theme);
    }
    nextTheme() {
        const themeArray = Object.keys(this.availableThemes);
        const current = themeArray.indexOf(document.body.getAttribute('data-theme') || this.defaultTheme);
        const max = themeArray.length;
        let next = current + 1;
        if (next === max)
            next = 0;
        return themeArray[next];
    }
    getStorageTheme() {
        return localStorage.getItem('theme');
    }
    cycle() {
        const nextTheme = this.nextTheme();
        this.setTheme(nextTheme);
    }
}
