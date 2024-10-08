import React from 'react';

export const themes = {
  dark: {
    fontcolor: '#ffffff',
    background: '#222222',
  },
  light: {
    fontcolor: '#000000',
    background: '#eeeeee',
  },
};

export const ThemeContext = React.createContext(themes.dark);