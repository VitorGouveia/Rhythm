export type PickTheme = 'windows95' | 'modern' | 'retro';

export class Theme {
  /** Current theme */
  theme: PickTheme = this.getStorageTheme();

  /** Theme that will be used as callback */
  defaultTheme: 'windows95' = 'windows95';

  /** List of all the themes available */
  availableThemes = {
    windows95: 'windows95',
    modern: 'modern',
    retro: 'retro',
  };

  constructor(theme?: PickTheme) {
    let newTheme = theme || (this.theme as PickTheme);

    /** If the theme isn't on the available themes list with pattern matching */
    if (!this.availableThemes[newTheme]) {
      newTheme = this.defaultTheme;
    }

    this.setTheme(newTheme);
  }

  setTheme(theme: PickTheme) {
    /** Just set theme in localStorage and body */
    this.theme = theme;

    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }

  nextTheme(): PickTheme {
    const themeArray = Object.keys(this.availableThemes);

    const current = themeArray.indexOf(
      document.body.getAttribute('data-theme') || this.defaultTheme
    );
    const max = themeArray.length;
    let next = current + 1;

    /** If next item reaches the max of the array, set it to the first array item */
    if (next === max) next = 0;

    return themeArray[next] as PickTheme;
  }

  getStorageTheme(): PickTheme {
    return localStorage.getItem('theme') as PickTheme;
  }

  /** This will cycle through all themes */
  cycle() {
    const nextTheme = this.nextTheme();

    this.setTheme(nextTheme);
  }
}

// export class Theme {
//   /* current theme */
//   public theme: PickTheme = 'windows95';

//   /* default theme */
//   public defaultTheme: PickTheme = 'windows95';

//   /* all available themes */
//   public availableThemes = {
//     windows95: 'windows95',
//     modern: 'modern',
//     retro: 'retro',
//   };

//   public localTheme = localStorage.getItem('theme') || this.defaultTheme;

//   constructor(theme: PickTheme) {
//     let newTheme = theme;

//     /* searches for the parameter theme inside of the available theme object */
//     const isValidTheme = this.availableThemes[theme];
//     /* if the theme is invalid */
//     if (!isValidTheme) {
//       /* use the default theme */
//       newTheme = this.defaultTheme;
//     }

//     this.setTheme(newTheme);
//   }

//   setTheme(theme: PickTheme) {
//     this.theme = theme;

//     localStorage.setItem('theme', theme);
//     document.body.setAttribute('data-theme', theme);
//   }

//   cycle(): PickTheme {
//     const themeArray = Object.keys(this.availableThemes);

//     /* theme on the body */
//     const dataTheme =
//       document.body.getAttribute('data-theme') || this.defaultTheme;

//     /* get the index in the array of the theme in use */
//     const currentThemeIndex = themeArray.indexOf(dataTheme);

//     /* gets the max size of the theme array length */
//     const max = themeArray.length;
//     /* goes to the next array item */
//     let next = currentThemeIndex + 1;

//     /* if the next item is the last item, go to 0 */
//     if (next === max) {
//       next = 0;
//     }

//     this.setTheme(themeArray[next] as PickTheme);

//     return themeArray[next] as PickTheme;
//   }
// }
