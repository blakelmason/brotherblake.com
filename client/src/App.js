import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './style.scss'

import Header from './components/Header'
import Home from './components/Home'
import Scriptures from './pages/scriptures/Scriptures'
import Topics from './components/Topics'

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-100 pb-3 pb-lg-5">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/scriptures" component={Scriptures} />
            <Route path="/topics" component={Topics} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
