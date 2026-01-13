import {ColorTheme} from '../../libs/types/assets';

export const colors: {light: Partial<ColorTheme>; dark: ColorTheme} = {
  light: {},
  dark: {
    PRIMARY: '#051f20',
    SECONDARY: '#8eb69b',
    CONTRAST: '#daf1dd',
    ACCENT: '#f1ae17',
    WARNING: '#900',

    GRADIENT_START: '#FFD500',
    GRADIENT_END: '#FF9900',

    BLACK: 'black',
    WHITE: 'white',
    ERROR: '#900',
  },
};
