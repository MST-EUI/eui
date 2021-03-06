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
  Tab,
  Popover,
} = eui;

const {
  Tabs,
  TabPane,
} = Tab;

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
    const tabSourceCode = `import { Tab } from '@mistong/eui';
const {
  Tabs,
  TabPane,
} = Tab;

<Tabs defaultActiveKey="3" onChange={() => {}}>
  <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
  <TabPane tab="选项卡2" key="2">选项卡二内容</TabPane>
  <TabPane tab="选项卡3" key="3">选项卡三内容</TabPane>
</Tabs>
`;

    const popoverSourceCode = `import { Popover, Button } from '@mistong/eui';

const overlay = (
  <div>
  这是个自定义的tooltip overlay!
  </div>
);

<Popover placement="right" title="右边" overlay={overlay}>
  <Button type="primary" style={{ marginTop: 5 }}>右边</Button>
</Popover>
`;
    const overlay = (
      <div>
      这是个自定义的tooltip overlay!
      </div>
    );
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
        <Code sourceCode={tabSourceCode}>
          <Tabs defaultActiveKey="3" onChange={() => {}}>
            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
            <TabPane tab="选项卡2" key="2">选项卡二内容</TabPane>
            <TabPane tab="选项卡3" key="3">选项卡三内容</TabPane>
          </Tabs>
        </Code>
        <Code sourceCode={popoverSourceCode}>
          <Popover placement="right" title="右边" overlay={overlay}>
            <Button type="primary" style={{ marginTop: 5 }}>右边</Button>
          </Popover>
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
