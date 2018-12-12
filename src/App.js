import React, { Component } from 'react';
import { connect } from 'react-redux';

import './background.css';

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
    const Main = styled.div`${this.props.css}`;
    return (
      <Main>
        <div className={`App bg-${this.props.class}`}>
          <Header />
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
    class: state.backgroundReducer.variables.name,
    css: state.backgroundReducer.css
  }
}

export default connect(mapStateToProps)(App);
