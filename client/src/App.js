import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import Backdrop from './components/Backdrop';
import Home from './components/Home';

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  state = {
    sidebar: false
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    const { sidebar } = this.state;
    return (
      <Router>
        <div className="row d-flex no-gutters">
          <div className="col-auto">
            <Sidebar inProp={sidebar} close={() => this.setState({ sidebar: false })} />
          </div>
          <div className="col-auto col-xl">
            <Backdrop />
            <Menu sidebar={() => this.setState({ sidebar: true })} />
            <Route path="/" exact component={Home} />
            {/* <Route path="/updates" component={Updates} />
        <Route path="/test" component={Test} /> */}
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
