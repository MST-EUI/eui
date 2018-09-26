import React from 'react';
import ReactDOM from 'react-dom';
import eui from '../src';

import './index.scss';

const {
  Icon,
  EmptyData,
} = eui;

class Demo extends React.Component {
  render() {
    return (
      <div className="demo eui-demo">
        <Icon type="success" />
        <EmptyData />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
