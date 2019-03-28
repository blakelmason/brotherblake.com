import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StickyContainer, Sticky } from 'react-sticky';
import Backdrop from './components/Backdrop';
import Home from './components/Home';
import Updates from './components/Updates';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends Component {
  state = {
    title: 'Home',
    sidebar: false
  }
  render() {
    return (
      <div id="App">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          isOpen={this.state.sidebar}
        />
        <div id="page-wrap">
          <Router>
            <>
              {/* <Menu /> */}
              <Backdrop />
              <StickyContainer>
                <Sticky>
                  {({ style }) =>
                    <div style={{ ...style }}>
                      <div>howdy</div>
                      <Header

                        title={this.state.title}
                        sidebar={() => this.setState({ sidebar: true })}
                      />
                    </div>
                  }
                </Sticky>
              </StickyContainer>
            </>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
