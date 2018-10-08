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
        <hr /><br /><br />
        <EmptyData />
        <hr /><br /><br />
        <Code sourceCode={codeSourceCode}>
          <Icon type="close" />
        </Code>
        <hr /><br /><br />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
