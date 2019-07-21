import React, { Component, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import Template from '../Template'
import Chapter from './Chapter'
import Loading from '../Loading'

const noWrap = {
  whiteSpace: 'nowrap'
}

class Scriptures extends Component {
  loadArticle = () => {
    const data = window.location.pathname.split('/')[2].split('-')
    const [collection, book, chapter] = [data[0], data[1], data[2]]
    const combined = (book + '_' + chapter).toUpperCase()
    const LazyComponent = React.lazy(() =>
      import(`../../pages/scriptures/${collection}/${book}/${combined}`)
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
        <Route path="/scriptures" exact component={Home} />
        <Route path="/scriptures/:page" render={() => this.loadArticle()} />
      </Switch>
    )
  }
}

const Home = () => {
  return (
    <Template
      title="Scriptures"
      image="https://i.imgur.com/2rhywQt.jpg"
      position="50% 35%"
      padding
    >
      <div className="row" style={noWrap}>
        <Collection name="Old Testament" />
        <Collection name="New Testament" />
        <Collection name="Book of Mormon">
          <Book name="Alma">
            <Chapter collection="bom" book="alma" chapter="51" />
          </Book>
          <Book name="3 Nephi">
            <Chapter collection="bom" book="nephi3" chapter="18" />
          </Book>
        </Collection>
        <Collection name="Doctrine and Covenants">
          <Book name="Section">
            <Chapter collection="dc" book="section" chapter="24" />
          </Book>
        </Collection>
        <Collection name="Pearl of Great Price" />
      </div>
    </Template>
  )
}

const Collection = ({ name, children }) => {
  return (
    <div className="col-12">
      <div className="border rounded p-2 bg-light d-inline-block h4 mb-0">
        <strong>{name}</strong>
      </div>
      <div className="mx-2 mt-2 mb-4">{children}</div>
    </div>
  )
}

const Book = ({ name, children }) => {
  return (
    <div className="my-3">
      <div className="row">
        <div className="col">
          <div className="h4">
            <u>{name}</u>
          </div>
        </div>
      </div>
      <div className="row">{children}</div>
    </div>
  )
}

export default Scriptures
