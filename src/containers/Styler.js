import React, { Component } from 'react';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

import StylerForm from './StylerForm';

import { connect } from 'react-redux';
import { compileToCss } from '../actions';

import ColorsPreview from '../components/ColorsPreview';
import CombileResult from '../components/CombileResult';
import TemplatePreview from '../components/TemplatePreview';

class Styler extends Component
{
    submitHandler = values => {
        this.props.sendVariables(values);
    }

    render() {        
        var css = this.props.result ? this.props.result.css : '';
        var half = css.slice(css.indexOf('.bg-'), css.length);
        var bg = half.slice(0, half.indexOf('}') + 1);

        return (            
            <div className="bg-dark">
                <Header image="webinjaz-styler.png" current="Styler" version="v1.0.0(beta)" />
                <section className="build-tool-section">
                    <StylerForm onSubmit={this.submitHandler} />
                    <TemplatePreview variables={this.props.variables} shapesList={this.props.shapesList} bgStyle={bg} />
                    <CombileResult result={this.props.result} error={this.props.error} />
                    <ColorsPreview variables={this.props.variables} bgStyle={bg} />
                </section>
                <Footer />
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