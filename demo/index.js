import React from 'react';
import ReactDOM from 'react-dom';
import eui from '../src';

import './index.scss';

const {
  Icon,
  EmptyData,
  Code,
  Demo,
  Button,
  Dialog,
} = eui;

class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
  }

  dialogToggle = () => {
    const self = this;
    self.setState({
      dialogVisible: !self.state.dialogVisible,
    });
  }

  render() {
    const {
      dialogVisible,
    } = this.state;
    const self = this;
    const iconSourceCode = `import { Icon } from '@mistong/eui';

<Icon type="info" style={{ color: '#f60', fontSize: '30px' }} />
`;
    const emptyDataSourceCode = `import { EmptyData } from '@mistong/eui';

<EmptyData />
`;
    const buttonSourceCode = `import { Button } from '@mistong/eui';

<Button>按钮测试</Button>
`;
    const dialogCode = `import { Dialog, Button } from '@mistong/eui';

class Demo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
  }

  dialogToggle = () => {
    const self = this;
    self.setState({
      dialogVisible: !self.state.dialogVisible,
    });
  }

  render() {
    return (
      <Button onClick={self.dialogToggle}>点我打开 Dialog
      </Button>
      <Dialog title="提示" onCancel={self.dialogToggle} onConfirm={self.dialogToggle} visible={dialogVisible}>我是测试 dialog</Dialog>
    );
  }
}
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
        <Code sourceCode={buttonSourceCode}>
          <Button>按钮测试</Button>
        </Code>
        <Code sourceCode={dialogCode}>
          <Button onClick={self.dialogToggle}>点我打开 Dialog
          </Button>
          <Dialog title="提示" onCancel={self.dialogToggle} onConfirm={self.dialogToggle} visible={dialogVisible}>我是测试 dialog</Dialog>
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
