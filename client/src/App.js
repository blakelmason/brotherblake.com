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
    const work = data[2]
    const book = data[3]
    const chapter = data[4]
    const combined = book + chapter
    const componentName = combined.toUpperCase()
    console.log(combined)
    const LazyComponent = React.lazy(() =>
      import(`./components/Articles/${work}/${book}/${componentName}`)
    )
    return (
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    )
  }

  render() {
    return (
      <div className="d-flex flex-column w-100 pb-3 pb-lg-5">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/scriptures" component={Scriptures} />
            <Route path="/topics" component={Topics} />
            <Route path="/articles" render={() => this.loadArticle()} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
