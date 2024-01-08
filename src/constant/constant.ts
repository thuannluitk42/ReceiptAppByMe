/* eslint-disable prettier/prettier */
export const enum SCREENS {
    SPLASHSCREEN = 'SPLASHSCREEN',
    TAB = 'TAB',
    HOME = 'HOME',
    SEARCH = 'SEARCH',
    SETTING = 'SETTING',
    BOOKMARK = 'BOOKMARK'
}

export const TEXT = {
  LOGIN : 'LOGIN',
  SIGNUP: 'SIGNUP',
};

export const IMAGES =  {
  backgroundSlashScreen: require("../images/splashscreen.jpg"),
};

export const ICONS = {
    home: require('../images/home-icon.png'),
    search: require('../images/search-icon.png'),
    bookmark: require('../images/bookmark-icon.png'),
    setting: require('../images/setting-icon.png')
}

export const COLORS = {
    black: '#000000',
    transparent: 'transparent',
    gray: '#CCC',
    white: '#FFFFFF',
    primary: '#11b88f'
}

export const SIZES = {
  paddingLarge: 32,
  paddingMedium: 24,
  paddingSmall: 16,
  marginLarge: 32,
  marginMedium: 24,
  marginSmall: 16,
};

export const FONTS = {
  fontLarge: 36,
  fontMedium: 24,
  fontSmall: 12,
  fontWeightLarge: '700',
  fontWeightMedium: '500',
};
