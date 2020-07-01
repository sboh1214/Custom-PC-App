module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/assetsTransformer.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@?react-native(\\w|-)*' +
      '|native-base-shoutem-theme' +
      ')/)',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './__mocks__/mock.js',
  ],
};
