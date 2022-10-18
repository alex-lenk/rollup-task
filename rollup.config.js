import {babel} from '@rollup/plugin-babel'
import styles from 'rollup-plugin-styles'
import image from 'rollup-plugin-img'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default [
  {
    input: './index.js',
    output: {
      file: './build/bundle.js',
      format: 'es'
    },
    watch: {
      exclude: 'node_modules/**'
    },
    plugins: [
      babel({babelHelpers: 'bundled'}),
      styles(),
      image({
        limit: 10000000
      }),
      serve({
        open: true,
        contentBase: './',
        port: 3506,
      }),
      livereload({
        watch: './',
      })
    ],
  }
]
