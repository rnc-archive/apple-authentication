/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const reactNativeLib = path.resolve(__dirname, '..');

module.exports = {
  transformer: {
  	watchFolders: [path.resolve(__dirname, 'node_modules'), reactNativeLib],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
