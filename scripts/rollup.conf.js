const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const typescript = require('rollup-plugin-typescript2')

module.exports = {
  input: 'src/index.ts',
  
  output: {
    file: 'dist/mying-utils.js',
    name: 'Utils',
    format: 'umd'
  },

  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      tsconfigOverride: { compilerOptions: { declaration: false, emitDeclarationOnly: false } }
    }),

    commonjs({
      include: 'node_modules/**'
    }),
    
    resolve()
  ]
}
