# Poland 2.0 Universal Components

Common components used across Poland 2.0 (website, app).

Each component has an implementation for Web, Android and iOS. Inside each component folder there is a `.js`/`.jsx` file named according to the platform it is implemented for (e.g. `web.jsx`, `android.jsx`, `iOS.jsx`).

Later on into the project, module publishing will be developed. All components will be packed into separate modules (for React and Native), allowing them to be easily installed using a package manager.

**NOTE:** Components for React Native are developed in this repository using the `react-native-web` package, instead of `react-native`. This is only for compatibility with Storybook. Actual Native components will make use of the `react-native` package.
