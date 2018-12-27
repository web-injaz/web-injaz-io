import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Intro from './components/Intro';
import Docs from './components/Docs';
import About from './components/About';

import Shaper from './containers/Shaper';
import CreateBackground from './containers/CreateBackground';

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
          <CreateBackground />
          <Shaper />
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
