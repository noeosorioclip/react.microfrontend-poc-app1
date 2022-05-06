const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  entry: './src/index',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
    // publicPath: 'auto',
  },
  devServer: {
    port: 8081,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'pokemon',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './Navbar': './src/components/NavBar',
        './pokemons': './src/data/pokemons',
        './Evolutions': './src/pages/Evolutions',
        './PokemonCard': './src/components/Pokemon',

      },
      shared: packageJson.dependencies
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

