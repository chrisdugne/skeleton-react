const chalk = require('chalk');
const esbuild = require('esbuild');
const liveServer = require('live-server');
const historyApiFallback = require('connect-history-api-fallback');
const svgrPlugin = require('esbuild-plugin-svgr');

const SANDBOX = 'sandbox';

esbuild
  .build({
    entryPoints: ['src/index.js'],
    outfile: `${SANDBOX}/app.bundle.js`,
    format: 'cjs',
    loader: {
      '.js': 'jsx'
    },
    bundle: true,
    sourcemap: true,
    watch: true,
    plugins: [svgrPlugin()],
    define: {
      'process.env.NODE_ENV': '"development"',
      global: 'globalThis'
    }
  })
  .then(result => {
    console.log('\n☢️  server running:');
    console.log(chalk.bold.blue(`  - http://localhost:8080`));
    console.log(' ');

    liveServer.start({
      root: SANDBOX,
      open: false,
      middleware: [historyApiFallback()]
    });
  });
