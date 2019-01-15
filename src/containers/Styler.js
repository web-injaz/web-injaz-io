import React, { Component } from 'react';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

import StylerForm from './StylerForm';

import { connect } from 'react-redux';
import { compileToCss } from '../actions';

import ColorsPreview from '../components/ColorsPreview';
import CombileResult from '../components/CombileResult';
import TemplatePreview from './TemplatePreview';

class Styler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         variables: {},
         isFullScreen: false,
         showToggler: false
      }
    }
    
    submitHandler = values => {
        this.props.sendVariables(values);
        this.setState({
            variables: values,
            showToggler: true
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.variables !== nextProps.variables ||
            this.props.result !== nextProps.result ||
            this.state.isFullScreen !== nextState.isFullScreen) {
            return true;
        }
        return false;
    }

    fullscreenHandler = () => {
        this.setState(prevState => ({
            ...prevState,
            isFullScreen: !prevState.isFullScreen
        }))
    }

    render() {
        return (
            <div className="bg-dark" style={{position: 'relative'}}>
                {!this.state.isFullScreen && <Header image="webinjaz-styler.png" current="Styler" version="v1.0.0(beta)" />}
                <section className="build-tool-section">
                    {!this.state.isFullScreen && <StylerForm onSubmit={this.submitHandler} />}
                    <TemplatePreview 
                        variables={this.props.variables} 
                        result={this.props.result} 
                        shapesList={this.props.shapesList} 
                        isFullScreen={this.state.isFullScreen}
                    />
                    {!this.state.isFullScreen && <CombileResult result={this.props.result} error={this.props.error} />}
                    {!this.state.isFullScreen && <ColorsPreview variables={this.props.variables} result={this.props.result} />}
                </section>
                {
                    this.state.showToggler && <span className="fullscreen_toggler" onClick={() => this.fullscreenHandler()}>
                        {!this.state.isFullScreen ? 'Full' : 'Back'}
                    </span>
                }
                {!this.state.isFullScreen ? <Footer />: null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.compile.error,
        result: state.compile.result,
        variables: state.compile.variables,
        shapesList: state.shapes.shapesList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendVariables: vars => dispatch(compileToCss(vars))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Styler);