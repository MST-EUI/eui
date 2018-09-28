const { copyDir, relPath } = require('./utils');

copyDir(relPath('../lib'), relPath('../dist'));
