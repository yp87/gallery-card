import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [
  nodeResolve({}),
  commonjs(),
  json(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    babelrc: false,
  }),
  //cleanup({ comments: 'none' }),
  dev && serve(serveopts),
  !dev &&
  terser({
    format: {
      comments: false,
    },
    mangle: {
      safari10: true,
    },
  }),
];

export default [
  {
    input: 'src/gallery-card-2024.js',
    output: {
      dir: './dist',
      format: 'es',
      sourcemap: dev ? true : false,
    },
    plugins: [...plugins],
    watch: {
      exclude: 'node_modules/**',
    },
  },
];