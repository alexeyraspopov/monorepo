import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HelloWorldMessage } from '@monorepo/uikit/HelloWorldMessage';
import '@monorepo/uikit/Typography.css';

ReactDOM.render(
  <Fragment>
    <h1>This is Project A</h1>
    <HelloWorldMessage />
  </Fragment>,
  document.querySelector('main'),
);
