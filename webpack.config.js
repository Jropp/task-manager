'use strict';
// node js package with utility functions
// let path = require('path'); // eslint-ignore-line no-unused-vars

module.exports = {
  entry: './src/js/app.js',
  output: {
	// use to get absolute path instead of relative
    path: 'dist', // this needs to be changed later
    filename: 'bundle.js',
  }

};
