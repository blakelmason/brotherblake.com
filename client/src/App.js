import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './style.scss'

import Header from './components/Header'
import Home from './components/Home'
import Scriptures from './components/Scriptures/Scriptures'
import Topics from './components/Topics'
import Loading from './components/Loading'

class App extends Component {
  loadArticle = () => {
    const data = window.location.pathname.split('/')
    const book = data[2]
    const chapter = data[3]
    const combined = book + chapter
    const componentName = combined.toUpperCase()
    console.log(combined)
    const LazyComponent = React.lazy(() =>
      import(`./components/Articles/${book}/${componentName}`)
    )
    return (
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    )
  }

  render() {
    return (
      <div className="d-flex flex-column w-100">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/scriptures" component={Scriptures} />
            <Route path="/topics" component={Topics} />
            <Route path="/article" render={() => this.loadArticle()} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
