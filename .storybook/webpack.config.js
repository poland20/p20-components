const path = require("path");
const nodeModules = "./node_modules";

module.exports = (baseConfig, env, defaultConfig) => {

  // TypeScript
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("ts-loader")
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  // transpile React Native and Native Base dependencies
  defaultConfig.module.rules.push({
    test: /\.js$/,
    include: [
      path.resolve(nodeModules, "native-base-shoutem-theme"),
      path.resolve(nodeModules, "react-native-drawer"),
      path.resolve(nodeModules, "react-native-keyboard-aware-scroll-view"),
      path.resolve(nodeModules, "react-native-easy-grid"),
      path.resolve(nodeModules, "react-native-vector-icons")
    ],
    loader: require.resolve("babel-loader"),
    options: {
      cacheDirectory: true,
      presets: ["react-native"]
    }
  });

  // resolve React Native module to web equivalent
  defaultConfig.resolve.alias = {
    "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
    'react-native': 'react-native-web'
  };

  return defaultConfig;
};