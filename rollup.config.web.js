import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import embedCss from 'rollup-plugin-embed-css';
import svgo from 'rollup-plugin-svgo';

import defaultPackage from './package.json';

export default {
  input: 'src/components/index.web.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    name: 'p20-components'
  },
  external: [
    'react',
    'react-dom',
    'cloudinary',
    'color',
    'emotion',
    'path',
    'react-emotion',
    'typography',
    'moment'
  ],
  plugins: [
    embedCss(),
    svgo(),
    resolve({
      extensions: ['.ts', '.tsx']
    }),
    commonjs(),
    typescript({
      typescript: require('typescript')
    }),
    babel({
      presets: [
        "react",
        [
          "env", {
            modules: false
          }
        ]
      ],
      plugins: [
        "external-helpers"
      ],
      exclude: 'node_modules/**'
    }),
    generatePackageJson({
      inputPackageJson: 'package.json',
      baseContents: {
        name: defaultPackage.name,
        main: 'bundle.js',
        version: defaultPackage.version
      }
    })
  ]
}