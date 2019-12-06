// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';


export default class Home extends Component {
  componentDidMount() {
    console.log({ props: this.props })
  }
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Sistema de Apoio</h2>
        <Link to={"/login"}>entrar</Link>
      </div>
    );
  }
}
