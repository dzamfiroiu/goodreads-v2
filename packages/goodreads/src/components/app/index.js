import React, { Component } from 'react'
import { connect } from 'react-redux'
import { components, typography } from '@goodreads-v2/component-library'
import './index.css'
import BookList from '../book-list'

const { Artifika } = typography
const { NavBar } = components

class App extends Component {
  render() {
    const { username, authenticated } = this.props
    return (
      <div className="App">
        <div>test</div>
        <div>test2</div>
        <NavBar authenticated={authenticated} username={username} />
        <main style={{ height: '70vh' }}>
          <Artifika tag="h1">Books</Artifika>
          <BookList />
        </main>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  const { username, error } = state.auth
  const authenticated = error === null
  return { username, authenticated }
}
export default connect(mapStateToProps)(App)