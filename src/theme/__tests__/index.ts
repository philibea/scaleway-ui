import { createTheme } from '../index'

const newTheme = {
  contrasts: {
    neutral: {
      100: '#ff0000',
      1000: '#ff0000',
    },
    primary: {
      100: '#ffffff',
      300: '#ffffff',
      500: '#ffffff',
      900: '#ffffff',
    },
  },
  radii: {
    default: '1px',
    large: '2px',
  },
  space: {
    0: '6px',
    9: '600px',
  },
}

describe('createTheme', () => {
  it('should give correct array of ids', () => {
    expect(createTheme(newTheme)).toEqual({
      /* eslint-disable sort-keys */
      colors: {
        danger: {
          background: '#ffe1e7',
          backgroundHover: '#ffe1e7',
          backgroundDisabled: '#ffe1e7',
          backgroundWeak: '#ff0000',
          backgroundWeakHover: '#ef5774',
          backgroundWeakDisabled: '#ff0000',
          backgroundStrong: '#ef5774',
          backgroundStrongHover: '#ef5774',
          backgroundStrongDisabled: '#ef5774',
          text: '#ef5774',
          textHover: '#ef5774',
          textDisabled: '#ffe1e7',
          textWeak: '#ef5774',
          textWeakHover: '#ffe1e7',
          textWeakDisabled: '#ffe1e7',
          textStrong: '#ff0000',
          textStrongHover: '#ff0000',
          textStrongDisabled: '#ff0000',
          border: '#ef5774',
          borderHover: '#ef5774',
          borderDisabled: '#ffe1e7',
          borderWeak: '#ef5774',
          borderWeakHover: '#ef5774',
          borderWeakDisabled: '#ffe1e7',
          borderStrong: '#ef5774',
          borderStrongHover: '#ef5774',
          borderStrongDisabled: '#ef5774',
        },
        info: {
          background: '#e4edff',
          backgroundHover: '#e4edff',
          backgroundDisabled: '#e4edff',
          backgroundWeak: '#ff0000',
          backgroundWeakHover: '#3f6ed8',
          backgroundWeakDisabled: '#ff0000',
          backgroundStrong: '#3f6ed8',
          backgroundStrongHover: '#3f6ed8',
          backgroundStrongDisabled: '#3f6ed8',
          text: '#3f6ed8',
          textHover: '#3f6ed8',
          textDisabled: '#e4edff',
          textWeak: '#3f6ed8',
          textWeakHover: '#e4edff',
          textWeakDisabled: '#e4edff',
          textStrong: '#ff0000',
          textStrongHover: '#ff0000',
          textStrongDisabled: '#ff0000',
          border: '#3f6ed8',
          borderHover: '#3f6ed8',
          borderDisabled: '#e4edff',
          borderWeak: '#3f6ed8',
          borderWeakHover: '#3f6ed8',
          borderWeakDisabled: '#e4edff',
          borderStrong: '#3f6ed8',
          borderStrongHover: '#3f6ed8',
          borderStrongDisabled: '#3f6ed8',
        },
        neutral: {
          background: '#d4dae7',
          backgroundHover: '#f6f5f7',
          backgroundDisabled: '#f6f5f7',
          backgroundWeak: '#ff0000',
          backgroundWeakHover: '#4a4f62',
          backgroundWeakDisabled: '#ff0000',
          backgroundStrong: '#4a4f62',
          backgroundStrongHover: '#4a4f62',
          backgroundStrongDisabled: '#b2b6c3',
          text: '#4a4f62',
          textHover: '#151a2d',
          textDisabled: '#b2b6c3',
          textWeak: '#b2b6c3',
          textWeakHover: '#b2b6c3',
          textWeakDisabled: '#f6f5f7',
          textStrong: '#ff0000',
          textStrongHover: '#ff0000',
          textStrongDisabled: '#ff0000',
          border: '#f6f6f8',
          borderHover: '#f6f6f8',
          borderDisabled: '#f6f6f8',
          borderWeak: '#d4dae7',
          borderWeakHover: '#d4dae7',
          borderWeakDisabled: '#d4dae7',
          borderStrong: '#4a4f62',
          borderStrongHover: '#4a4f62',
          borderStrongDisabled: '#b2b6c3',
        },
        primary: {
          background: '#ffffff',
          backgroundHover: '#ffffff',
          backgroundDisabled: '#ffffff',
          backgroundWeak: '#ff0000',
          backgroundWeakHover: '#4f0599',
          backgroundWeakDisabled: '#ff0000',
          backgroundStrong: '#4f0599',
          backgroundStrongHover: '#4f0599',
          backgroundStrongDisabled: '#4f0599',
          text: '#4f0599',
          textHover: '#ffffff',
          textDisabled: '#eeeeff',
          textWeak: '#4f0599',
          textWeakHover: '#ffffff',
          textWeakDisabled: '#eeeeff',
          textStrong: '#ff0000',
          textStrongHover: '#ff0000',
          textStrongDisabled: '#ff0000',
          border: '#4f0599',
          borderHover: '#ffffff',
          borderDisabled: '#eeeeff',
          borderWeak: '#4f0599',
          borderWeakHover: '#4f0599',
          borderWeakDisabled: '#eeeeff',
          borderStrong: '#4f0599',
          borderStrongHover: '#4f0599',
          borderStrongDisabled: '#4f0599',
        },
        secondary: {
          background: '#a365f6',
          backgroundHover: '#a365f6',
          backgroundDisabled: '#a365f6',
          backgroundWeak: '#ff0000',
          backgroundWeakHover: '#a365f6',
          backgroundWeakDisabled: '#ff0000',
          backgroundStrong: '#a365f6',
          backgroundStrongHover: '#a365f6',
          backgroundStrongDisabled: '#a365f6',
          text: '#a365f6',
          textHover: '#a365f6',
          textDisabled: '#a365f6',
          textWeak: '#a365f6',
          textWeakHover: '#a365f6',
          textWeakDisabled: '#a365f6',
          textStrong: '#ff0000',
          textStrongHover: '#ff0000',
          textStrongDisabled: '#ff0000',
          border: '#a365f6',
          borderHover: '#a365f6',
          borderDisabled: '#a365f6',
          borderWeak: '#a365f6',
          borderWeakHover: '#a365f6',
          borderWeakDisabled: '#a365f6',
          borderStrong: '#a365f6',
          borderStrongHover: '#a365f6',
          borderStrongDisabled: '#a365f6',
        },
        success: {
          background: '#cdfcf1',
          backgroundHover: '#cdfcf1',
          backgroundDisabled: '#cdfcf1',
          backgroundWeak: '#ff0000',
          backgroundWeakHover: '#45d6b5',
          backgroundWeakDisabled: '#ff0000',
          backgroundStrong: '#45d6b5',
          backgroundStrongHover: '#45d6b5',
          backgroundStrongDisabled: '#45d6b5',
          text: '#45d6b5',
          textHover: '#45d6b5',
          textDisabled: '#cdfcf1',
          textWeak: '#45d6b5',
          textWeakHover: '#cdfcf1',
          textWeakDisabled: '#cdfcf1',
          textStrong: '#ff0000',
          textStrongHover: '#ff0000',
          textStrongDisabled: '#ff0000',
          border: '#45d6b5',
          borderHover: '#45d6b5',
          borderDisabled: '#cdfcf1',
          borderWeak: '#45d6b5',
          borderWeakHover: '#45d6b5',
          borderWeakDisabled: '#cdfcf1',
          borderStrong: '#45d6b5',
          borderStrongHover: '#45d6b5',
          borderStrongDisabled: '#45d6b5',
        },
        warning: {
          background: '#ffefe6',
          backgroundHover: '#ffefe6',
          backgroundDisabled: '#ffefe6',
          backgroundWeak: '#ff0000',
          backgroundWeakHover: '#ff8c69',
          backgroundWeakDisabled: '#ff0000',
          backgroundStrong: '#ff8c69',
          backgroundStrongHover: '#ff8c69',
          backgroundStrongDisabled: '#ff8c69',
          text: '#ff8c69',
          textHover: '#ff8c69',
          textDisabled: '#ffefe6',
          textWeak: '#ff8c69',
          textWeakHover: '#ffefe6',
          textWeakDisabled: '#ffefe6',
          textStrong: '#ff0000',
          textStrongHover: '#ff0000',
          textStrongDisabled: '#ff0000',
          border: '#ff8c69',
          borderHover: '#ff8c69',
          borderDisabled: '#ffefe6',
          borderWeak: '#ff8c69',
          borderWeakHover: '#ff8c69',
          borderWeakDisabled: '#ffefe6',
          borderStrong: '#ff8c69',
          borderStrongHover: '#ff8c69',
          borderStrongDisabled: '#ff8c69',
        },
      },
      colorsDeprecated: {
        beta: '#ff8c69',
        black: '#000',
        blue: '#3f6ed8',
        chartGreen: '#33BBB3',
        chartNegativeRed: '#ef5774',
        chartPurple: '#9B83F9',
        crimson: '#cf0f34',
        darkBlue: '#2f52a1',
        foam: '#cdfcf1',
        gold: '#ffd536',
        gray100: '#f6f5f7',
        gray200: '#eeeeff',
        gray300: '#dce1eb',
        gray350: '#d4dae7',
        gray50: '#fafafb',
        gray550: '#b2b6c3',
        gray700: '#4a4f62',
        gray950: '#151a2d',
        green: '#45d6b5',
        info: '#3f6ed8',
        lightViolet: '#a365f6',
        ngray300: '#dbdbdf',
        orange: '#ff8c69',
        pippin: '#ffe1e7',
        primary: '#4f0599',
        red: '#ef5774',
        serenade: '#ffefe6',
        shadow: '#a5a5cd',
        success: '#45d6b5',
        transparent: 'transparent',
        violet: '#4f0599',
        warning: '#ef5774',
        white: '#fff',
        zumthor: '#e4edff',
      },
      fonts: {
        monospace:
          "'Lucida Console', Monaco, 'Courier New', Courier, monospace",
        sansSerif: 'Asap, System, sans-serif',
      },
      radii: {
        default: '1px',
        large: '2px',
      },
      screens: {
        large: 992,
        medium: 768,
        small: 576,
        xlarge: 1200,
        xsmall: 0,
      },
      space: {
        '0': '6px',
        '9': '600px',
      },
      /* eslint-enable sort-keys */
    })
  })
})
