const express = require('express');
require('dotenv').config();

const app = express();

const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';

// This if block is for Hot Module Reload implementation
if (enableHMR && (process.env.NODE_ENV !== 'production')) {
  console.log('Adding dev middleware, enabling HMR');
  /* eslint "global-require": "off" */
  /* eslint "import/no-extraneous-dependencies": "off" */
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');

  const config = require('./webpack.config');
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

const port = process.env.UI_SERVER_PORT || 3000;

app.use('/', express.static('public'));

app.listen(port, () => {
  console.log(`UI server started at port ${port}`);
});
