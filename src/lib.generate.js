const { copyDir } = require('./utils');

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const chalk = require('chalk');

const components = require('./components');

const {
  log,
  error,
} = console;
const exists = (...p) => fs.existsSync(path.resolve(__dirname, ...p));
const relPath = (...p) => path.resolve(__dirname, ...p);
const NODE_MODULES_PREFIX = '../node_modules/@mistong/';
const CSS_PREFIX = '../lib';
const CSS_DIR = relPath(CSS_PREFIX);

rimraf.sync(CSS_DIR);
log('directory lib is removed');
mkdirp.sync(CSS_DIR);
log('directory lib is created');

if (exists(NODE_MODULES_PREFIX)) {
  try {
    components.forEach((item) => {
      const targetDir = relPath(NODE_MODULES_PREFIX, `${item}`);
      if (exists(targetDir)) {
        const isKeepSrcRootDir = false;
        const currentDisDirName = String(item).replace('eui-', '');
        copyDir(
          relPath(NODE_MODULES_PREFIX, `${item}/dist`),
          relPath(CSS_PREFIX, currentDisDirName),
          isKeepSrcRootDir,
        );
        log(chalk.blue(`${item} dist is copied`));
      } else {
        log(chalk.red(`${item} has no directory dist`));
      }
    });
    log(chalk.green('files copy success'));
  } catch (e) {
    error(e);
  }
} else {
  log(chalk.red('directory node_modules is not exists, please try command npm i'));
}
