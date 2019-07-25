import React, { Component, Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import reference from './reference'

import Template from '../../components/Template'
import Loading from '../../components/Loading'

const noWrap = {
  whiteSpace: 'nowrap'
}

class Topics extends Component {
  loadArticle = () => {
    const data = window.location.pathname.split('/')
    const [letter, topic] = [data[2], data[3]]
    const LazyComponent = React.lazy(() =>
      import(`../../pages/topics/${letter}/${topic}`)
    )
    return (
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    )
  }

  render() {
    return (
      <Switch>
        <Route path="/topics" exact component={Home} />
        <Route path="/topics/:page" render={() => this.loadArticle()} />
      </Switch>
    )
  }
}

const Home = () => {
  return (
    <Template
      title="Topics"
      image="https://i.imgur.com/Vv6W9sG.jpg"
      position="50% 35%"
      padding
    >
      <div className="row" style={noWrap}>
        {reference.map((letter, index) => {
          return (
            <Letter letter={letter.letter} key={letter.letter + index}>
              {letter.topics.map((topic, index) => {
                return <Topic name={topic} key={topic + index} />
              })}
            </Letter>
          )
        })}
      </div>
    </Template>
  )
}

const Letter = ({ letter, children }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { letter: letter })
  )
  return (
    <div className="col-12">
      <div
        className="border rounded p-2 bg-light d-inline-block h4 mb-0 ml-3 text-center"
        style={{ width: 40 }}
      >
        <strong>{letter}</strong>
      </div>
      <div className="mb-4">{childrenWithProps}</div>
    </div>
  )
}

const Topic = ({ name, letter }) => {
  const linkName = name.replace(/ /g, '_')
  return (
    <div className="mx-3 my-2 d-inline-block">
      <Link to={`topics/${letter}/${linkName}`}>
        <div style={{ fontSize: '1.25rem' }}>{name}</div>
      </Link>
    </div>
  )
}

export default Topics
