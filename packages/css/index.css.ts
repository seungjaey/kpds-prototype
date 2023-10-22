import { createTheme } from '@vanilla-extract/css';
import { color } from '@kpds-prototype/tokens/src/index';

export const [themeClass, vars] = createTheme({
  color: {
    ...color,
  },
});
