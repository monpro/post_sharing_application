import React, { Component } from 'react';
import Header from "./common/header";
import {GlobalStyle} from "./statics/iconfont/iconfont";
import store from "./store/index";
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyle/>
          <Header/>
        </Provider>
    );
  }
}

export default App;
