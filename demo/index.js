import React from 'react';
import ReactDOM from 'react-dom';
import eui from '../src';

import './index.scss';

const {
  Icon,
  EmptyData,
  Code,
  Demo,
} = eui;

class DemoComponent extends React.Component {
  render() {
    const iconSourceCode = `import { Icon } from '@mistong/eui';

<Icon type="info" style={{ color: '#f60', fontSize: '30px' }} />
`;
    const emptyDataSourceCode = `import { EmptyData } from '@mistong/eui';

<EmptyData />
`;
    return (
      <Demo>
        <h2>eui 整包</h2>
        <p>该包整合了所有组件，可按需加载引用。</p>
        <h3>代码演示</h3>
        <Code sourceCode={iconSourceCode}>
          <Icon type="info" style={{ color: '#f60', fontSize: '30px' }} />
        </Code>
        <Code sourceCode={emptyDataSourceCode}>
          <EmptyData style={{ width: '200px' }} />
        </Code>
        <h3>API</h3>
        <p>无</p>
      </Demo>
    );
  }
}

ReactDOM.render(
  <DemoComponent />,
  document.getElementById('app'),
);
