import React, { Component } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="d-flex" style={{ background: '#f1f1f1', minHeight: '100vh' }}>
        <Sidebar />
        <div>
          <Header />
          <Welcome />
        </div>
      </div>
    );
  }
}

export default App;
