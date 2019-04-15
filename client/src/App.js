import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import { APP } from './Context';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop';
import Home from './components/Home';
import Scriptures from './pages/Scriptures/Scriptures';
import Updates from './pages/Updates/Updates';
import Topics from './pages/Topics/Topics';
import Header from './components/Header';

class App extends Component {
  static contextType = APP;
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      sidebar: false,
      actions: {
        sidebar: this.sidebar,
        backdrop: this.backdrop
      }
    };
  }

  componentDidMount() {
    this.setState({
      title: this.props.location.pathname.split('/')[1]
    });
  }

  componentDidUpdate() {
    const path = this.props.location.pathname.split('/')[1];
    path !== this.state.title && this.setState({ title: path });
  }

  sidebar = () => this.setState({ sidebar: false });

  render() {
    const { location } = this.props;
    const { sidebar, actions, title } = this.state;
    return (
      <APP.Provider value={actions}>
        <div className="row d-flex no-gutters mb-md-4 mb-lg-5">
          <div className="col-auto">
            <Sidebar
              inProp={sidebar}
              close={() => this.setState({ sidebar: false })}
            />
          </div>
          <div className="col-auto col-xl w-100">
            <Header />
            <Route path="/" exact component={Backdrop} />
            <Navbar
              sidebar={() => this.setState({ sidebar: !sidebar })}
              title={title}
              menu={location.pathname === '/' ? false : true}
            />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/updates"
                render={() => <Updates path={location.pathname} />}
              />
              <Route path="/scriptures" component={Scriptures} />
              <Route path="/topics" component={Topics} />
            </Switch>
          </div>
        </div>
      </APP.Provider>
    );
  }
}

export default withRouter(App);
