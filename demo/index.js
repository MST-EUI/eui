import React from 'react';
import ReactDOM from 'react-dom';
import eui from '../src';

import './demo.scss';

const {
  Button,
  Dialog,
  Icon,
} = eui;

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <Icon type="warning" />
        <Dialog visible={false} />
        <Button type="primary">测试按钮</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
