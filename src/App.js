import React, { Component } from 'react';
import Header from "./common";
import {GlobalStyle} from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
        <div>
          <GlobalStyle/>
          <Header/>
        </div>
    );
  }
}

export default App;
