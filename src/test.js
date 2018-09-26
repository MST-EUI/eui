const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const {
  log,
} = console;

const copyDir = (src, dist) => {
  const copy = (_src, _dist) => {
    const levelOneStat = fs.statSync(_src);
    const levelOneName = _src.split(path.sep)[_src.split(path.sep).length - 1];
    const levelOneDist = path.resolve(`${_dist}${path.sep}${levelOneName}`);
    if (levelOneStat.isDirectory()) {
      mkdirp(levelOneDist);
      const files = fs.readdirSync(_src);
      files.forEach((item) => {
        copy(path.resolve(`${_src}${path.sep}`, `${item}`), levelOneDist);
      });
    } else if (levelOneStat.isFile()) {
      fs.writeFileSync(levelOneDist, fs.readFileSync(_src));
    }
  };
  if (fs.existsSync(src)) {
    if (!fs.existsSync(dist)) {
      mkdirp.sync(dist);
    }
    copy(src, dist);
  } else {
    log(`${src} is not exists`);
  }
};
copyDir(path.resolve('../node_modules/@mistong/eui-icon/src/'), path.resolve('../css/'));
// fs.renameSync('../css/style', '../css/test');
// const s = fs.statSync('../css/tt/dfs/');
// console.log(s.isDirectory());
// console.log(s.isFile());
// mkdirp('../css/t/1/2/test.txt');
