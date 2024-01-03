'use client';

import { createTheme, MantineThemeOverride } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

export const theme: MantineThemeOverride = createTheme({
  /* Put your mantine theme override here */
  colors: {
    brandBlue: [
      '#E5F4FF',
      '#B8E1FF',
      '#8ACEFF',
      '#5CBBFF',
      '#2EA7FF',
      '#0094FF',
      '#0076CC',
      '#005999',
      '#003B66',
      '#001E33',
    ],
    brandPink: [
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
  },
  primaryColor: 'brandBlue',
  primaryShade: 5,
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
});

export const themeVars = themeToVars(theme);
