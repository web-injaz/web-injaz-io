import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ShaperForm from './ShaperForm';
import Components from '../components/Components';

class Shaper extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            compPreview: '',
            shapePreview: ''
        }
    }

    submitHandler = values => {
        console.log(values);
        this.setState({
            compPreview: values.component_name,
            shapePreview: values.shape_name
        });
    }

    render() {
        return (
            <div className="shaper">
                <Header image="webinjaz-shaper.png" current="Shaper" version="v0.0.1(beta)" />
                <ShaperForm onSubmit={this.submitHandler} />
                <Components component={this.state.compPreview} shape={this.state.shapePreview} />
                <Footer />
            </div>
        )
    }
}

export default Shaper;