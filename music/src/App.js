import React from 'react';
// import logo from './logo.svg';
import './App.scss';
// import { route } from 'react-router-dom';
import Header from './view/home/Header.js';
import Recommend from './view/home/Recommend.js';
import AppList from './view/home/AppList.js';
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header className="app-header" />
        <Recommend className="app-recommend" />
        <AppList className="app-list" />
      </div>
    );
  }
}

export default App;
