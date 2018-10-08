import React from 'react';
import ReactDOM from 'react-dom';
import eui from '../src';

import './index.scss';

const {
  Icon,
  EmptyData,
  Code,
} = eui;

class Demo extends React.Component {
  render() {
    const codeSourceCode = `
      import { Icon } from '@mistong/eui';
      ...
      <Icon type="close" />
    `;
    return (
      <div className="demo eui-demo">
        <Icon type="success" />
        <EmptyData />
        <Code sourceCode={codeSourceCode}>
          <Icon type="close" />
        </Code>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
