import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import url from 'rollup-plugin-url';

import defaultPackage from './package.json';

export default {
  input: 'src/index.web.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    name: '@poland20/p20-components'
  },
  external: [
    'react',
    'react-dom',
    'react-emotion',
    'react-id-swiper',
    'react-markdown',
    'cloudinary-core',
    'color',
    'emotion',
    'path',
    'typography',
    'moment'
  ],
  plugins: [
    url(),
    typescript({
      exclude: ["src/stories/**/*", "**/index.*.ts"],
      typescript: require('typescript')
    }),
    resolve({
      extensions: ['.ts', '.tsx']
    }),
    commonjs(),
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
        author: 'Poland 2.0',
        main: 'bundle.js',
        version: defaultPackage.version
      }
    }),
    copy({
      'src/index.web.ts': 'dist/index.d.ts',
      'README.md': 'dist/README.md'
    })
  ]
}