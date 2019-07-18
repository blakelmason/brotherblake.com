import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.scss'

import Header from './components/Header'
import Home from './components/Home'
import Scriptures from './components/Scriptures'
import Topics from './components/Topics'

function App() {
  return (
    <div className="mb-3">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/scriptures" exact component={Scriptures} />
        <Route path="/topics" exact component={Topics} />
      </Router>
    </div>
  )
}

export default App
