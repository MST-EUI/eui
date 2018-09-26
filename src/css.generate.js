const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const chalk = require('chalk');
const utils = require('./utils');
const components = require('./css.config');

const {
  log,
  error,
} = console;
const exists = (...p) => fs.existsSync(path.resolve(__dirname, ...p));
const relPath = (...p) => path.resolve(__dirname, ...p);
const NODE_MODULES_PREFIX = '../node_modules/@mistong/';
const CSS_PREFIX = '../css';
const CSS_DIR = relPath(CSS_PREFIX);

rimraf.sync(CSS_DIR);
log('directory css is removed');
mkdirp.sync(CSS_DIR);
log('directory css is created');

if (exists(NODE_MODULES_PREFIX)) {
  try {
    let indexScssStr = '@import \'../node_modules/@mistong/eui-css/src/theme/blue.whale.build.scss\';\r\n';
    // copy eui-* component src/style to css/eui-* directory
    components.forEach((item) => {
      const targetDir = relPath(NODE_MODULES_PREFIX, `${item}/src/style`);
      if (exists(targetDir)) {
        const isKeepSrcRootDir = false;
        const currentDisDirName = `style-${item}`;
        utils.copyDir(
          relPath(NODE_MODULES_PREFIX, `${item}/src/style`),
          relPath(CSS_PREFIX, currentDisDirName),
          isKeepSrcRootDir,
        );
        log(chalk.blue(`${item} src/style is copied`));
        indexScssStr += `@import '../css/${currentDisDirName}/index.scss';\r\n`;
      } else {
        log(chalk.red(`${item} has no directory src/style`));
      }
    });
    log(chalk.green('files copy success'));
    // generate src/index.scss
    fs.writeFileSync(relPath('./index.scss'), indexScssStr);
    log(chalk.green('index.scss write success'));
  } catch (e) {
    error(e);
  }
} else {
  log(chalk.red('directory node_modules is not exists, please try command npm i'));
}
