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
    ],
  }
]
