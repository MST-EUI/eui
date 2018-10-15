# eui 组件模板

## Install

```
$ npm i @mistong/eui
```

## Usage

```
import {
  Icon,
  EmptyData,
} from '@mistong/eui';
import '@mistong/eui/dist/index.css';
```

## 按需加载

安装 `babel-plugin-import` 插件

```
npm install babel-plugin-import --save-dev
```

`.babelrc` 文件配置如下

```
{
  "plugins": [
    [ "import", {
        "libraryName": "@mistong/eui"
      }
    ]
  ]
}
```
