import React, { Component } from 'react';
import Header from "./common/header";
import store from "./store/index";
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import {GlobalStyle} from "./statics/iconfont/iconfont";
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <GlobalStyle/>
              <Header/>
                <BrowserRouter>
                    <div>
                        <Route path ="/" exact component={Home}/>
                        <Route path = "/detail" exact component={Detail}/>
                    </div>
                </BrowserRouter>
            </div>
                </Provider>

    );
  }
}

export default App;
