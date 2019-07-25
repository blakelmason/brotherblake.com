/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './style.scss'
import mq from './components/breakpoints'

import Header from './components/Header'
import Home from './components/Home'
import Scriptures from './pages/scriptures/Scriptures'
import Topics from './pages/topics/Topics'
import Error from './components/Error'

class App extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column w-100 pb-sm-3 pb-lg-5"
        css={{
          background: '#fff',
          [mq[0]]: {
            background: '#f8f9fa'
          }
        }}
      >
        <Router>
          <Error>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/scriptures" component={Scriptures} />
              <Route path="/topics" component={Topics} />
            </Switch>
          </Error>
        </Router>
      </div>
    )
  }
}

export default App
