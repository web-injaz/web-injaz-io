import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Intro from './components/Intro';
import Docs from './components/Docs';
import About from './components/About';

import MiniShaper from './containers/MiniShaper';
import MiniStyler from './containers/MiniStyler';

import styled from 'styled-components';

class App extends Component {
  render() {    
    const Main = styled.div`${this.props.demo ? this.props.demo.css : ''}`;
    return (
      <Main>
        <div className={`App bg-dark`}>
          <Header current="Web injaz" version="v2.2.10" />
          <Intro />
          <About />
          <MiniStyler />
          <MiniShaper />
          <Docs />
          <Footer />
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => {    
  return {
    demo: state.demo.result
  }
}

export default connect(mapStateToProps)(App);
