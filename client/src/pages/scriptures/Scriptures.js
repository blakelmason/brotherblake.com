import React, { Component, Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Template from '../../components/Template'
import Loading from '../../components/Loading'

import reference from './reference'

const noWrap = {
  whiteSpace: 'nowrap'
}

class Scriptures extends Component {
  loadArticle = () => {
    const data = window.location.pathname.split('/')
    const [collection, book, chapter] = [data[2], data[3], data[4]]
    const combined = book + '_' + chapter
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
        {reference.map(collection => {
          return (
            <Collection name={collection.name}>
              {collection.books.map(book => {
                return (
                  <Book name={book.name}>
                    {book.chapters.map(chapter => {
                      return <Chapter number={chapter} />
                    })}
                  </Book>
                )
              })}
            </Collection>
          )
        })}
      </div>
    </Template>
  )
}

const Collection = ({ name, children }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { collection: name })
  )
  return (
    <div className="col-12">
      <div className="border rounded p-2 bg-light d-inline-block h4 mb-0">
        <strong>{name}</strong>
      </div>
      <div className="mx-2 mt-2 mb-4">{childrenWithProps}</div>
    </div>
  )
}

const Book = ({ name, collection, children }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { book: name, collection: collection })
  )
  return (
    <div className="my-3">
      <div className="row">
        <div className="col">
          <div className="h4">
            <u>{name}</u>
          </div>
        </div>
      </div>
      <div className="row">{childrenWithProps}</div>
    </div>
  )
}

const Chapter = ({ collection, book, number }) => {
  collection = collection.replace(/ /g, '_')
  book = book.replace(/ /g, '_')
  return (
    <div className="col">
      <Link to={`scriptures/${collection}/${book}/${number}`}>
        <div style={{ fontSize: '1.25rem' }}>{number}</div>
      </Link>
    </div>
  )
}

export default Scriptures
