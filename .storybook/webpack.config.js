const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {

  // // For example, add typescript loader:
  // defaultConfig.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   include: path.resolve(__dirname, "../src"),
  //   loader: require.resolve("ts-loader")
  // });
  // defaultConfig.resolve.extensions.push(".ts", ".tsx");

  defaultConfig.resolve.alias = {
    "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
    'react-native': 'react-native-web'
  };

  return defaultConfig;
};