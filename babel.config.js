module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '@assets': './assets',
          '@src': './src',
        },
      },
    ],
  ],
};
