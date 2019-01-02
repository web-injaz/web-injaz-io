import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ShaperForm from './ShaperForm';

class Shaper extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            compPreview: '',
            shapePreview: '',
            codepen: null
        }
    }

    submitHandler = values => {        
        const codepen = (
                <iframe height='350' scrolling='no' title='Empty' src={`${values.codepen}/?height=265&theme-id=0&default-tab=css,result`} frameBorder='no' allowFullScreen style={{width: '100%'}}>
                Perview not available
                </iframe>
        );
        this.setState({
            compPreview: values.component_name,
            shapePreview: values.shape_name,
            codepen
        });
    }

    render() {
        return (
            <div className="shaper">
                <Header image="webinjaz-shaper.png" current="Shaper" version="v0.0.1(beta)" />
                <ShaperForm onSubmit={this.submitHandler} />
                    {/* <Components component={this.state.compPreview} shape={this.state.shapePreview} /> */}
                    <div className="container">
                        {this.state.codepen}
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Shaper;