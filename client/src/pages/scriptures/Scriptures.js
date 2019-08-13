/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Component, Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Template from '../../components/Template'
import Loading from '../../components/Loading'

import reference from './reference'
import mq from '../../components/breakpoints'

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
      <div style={noWrap}>
        {reference.map((collection, index) => {
          return (
            <div key={collection.name + index}>
              <Collection name={collection.name}>
                {collection.books.map(book => {
                  return (
                    <Book name={book.name} key={book.name}>
                      {book.chapters.map(chapter => {
                        return (
                          <Chapter number={chapter} key={book.name + chapter} />
                        )
                      })}
                    </Book>
                  )
                })}
              </Collection>
            </div>
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
    <div className="my-5">
      <div
        className="border border-dark rounded py-2 px-3 d-inline-block mb-1 shadow"
        style={{ fontSize: '1.6rem', fontWeight: 350 }}
      >
        <strong>{name}</strong>
      </div>
      <div className="pt-3">
        <div
          css={{
            columnCount: 1,
            columnGap: 48,
            columnRule: '1px solid #ecebeb',
            [mq[0]]: {
              columnCount: 2
            },
            [mq[1]]: {
              columnCount: 3
            }
          }}
        >
          {childrenWithProps}
        </div>
      </div>
    </div>
  )
}

const Book = ({ name, collection, children }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { book: name, collection: collection })
  )
  return (
    <div className="mb-3" style={{ breakInside: 'avoid' }}>
      <div className="border rounded shadow d-inline-block h5 p-2 bg-light">
        {name}
      </div>
      <div>{childrenWithProps}</div>
    </div>
  )
}

const Chapter = ({ collection, book, number }) => {
  collection = collection.replace(/ /g, '_')
  book = book.replace(/ /g, '_')
  return (
    <div className="mx-2 d-inline-block">
      <Link to={`scriptures/${collection}/${book}/${number}`}>
        <div style={{ fontSize: '1.25rem' }}>{number}</div>
      </Link>
    </div>
  )
}

export default Scriptures
