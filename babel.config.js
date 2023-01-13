module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '~/api': './src/api',
            '~/components': './src/components',
            '~/assets': './src/assets',
            '~/screens': './src/screens',
            '~/services': './src/services',
            '~/navigation': './src/navigation',
            '~/utils': './src/utils',
            '~/theme': './src/theme',
            '~/images': './src/assets/images',
            '~/svg': './src/assets/svg',
            '~/stores': './src/stores',
            '~/mappers': './src/mappers',
            '~/modules': './src/modules',
          },
        },
      ],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '~/env',
          path: '.env',
        },
      ],
    ],
  };
};
