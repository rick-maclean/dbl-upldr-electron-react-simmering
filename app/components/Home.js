// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Home.css';
// using an ES6 transpiler, like babel
// import Img from 'react-image';
// import logo from './logo.svg';
import jestpadded from './jest-padded-90.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="App-header">
            <h2>Welcome to React</h2>
            <img src={jestpadded} className="img-thumbnail" alt="logo" />
          </div>
          <h1>Hi there we have a very simple React in Electron App</h1>
          <h3>Well what are we up to now Eric and Rick</h3>
        </div>
      </div>
    );
  }
}
