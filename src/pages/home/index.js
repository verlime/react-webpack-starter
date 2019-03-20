import './index.scss';

import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Content from '../../components/content';
import Loading from '../../components/Loading';
// import List from './List';

const AsyncList = Loadable({
  loader: () => import('./List'),
  // loader: () => Promise.resolve(require('./List.js')),
  loading: Loading
});

class Home extends Component {
  render() {
    return (
      <Content>
        <div className="placeholder">Home Content</div>
        <AsyncList/>
      </Content>
    );
  }
}

export default Home;
