import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ShaperForm from './ShaperForm';
class Shaper extends Component
{

    submitHandler = values => {
        console.log(values);
    }

    render() {
        return (
            <div className="shaper">
                <Header current="Shaper" version="v0.0.1(beta)" />
                <ShaperForm onSubmit={this.submitHandler} />
                <Footer />
            </div>
        )
    }
}

export default Shaper;