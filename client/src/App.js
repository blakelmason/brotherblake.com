import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, withRouter } from "react-router-dom";
import { AppContext } from './Context'
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop';
import Home from './components/Home';
import Scriptures from './components/Scriptures'
import Updates from './components/Updates'
import Topics from './components/Topics'

class App extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true,
      title: 'Home',
      actions: {
        setTitle: this.setTitle,
        closeSidebar: this.closeSidebar
      }
    }
  }

  setTitle = (title) => this.setState({ title: title });
  closeSidebar = () => this.setState({ sidebar: false })

  render() {
    const { sidebar, title, actions } = this.state;
    return (
      <AppContext.Provider value={actions}>
        <div className="row d-flex no-gutters">
          <Route path={'/'} exact children={({ match }) =>
            !match &&
            <div className="col-auto">
              <Sidebar inProp={sidebar} close={() => this.setState({ sidebar: false })} />
            </div>
          }
          />
          <div className="col-auto col-xl">
            <Backdrop />
            <Navbar
              sidebar={() => this.setState({ sidebar: !sidebar })}
              title={title}
            />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/updates" component={Updates} />
              <Route path="/scriptures" component={Scriptures} />
              <Route path="/topics" component={Topics} />
            </Switch>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default withRouter(App);
