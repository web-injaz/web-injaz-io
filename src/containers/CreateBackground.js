import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import Highlight from 'react-highlight';

import { changeBackground } from '../actions';

import Form from '../components/utilities/Form';

class CreateBackground extends Component {
    constructor() {
        super();

        this.state = {
            variables: {
                name: '#eeeeee',
                color: '#343a40'
            }
        }
    }

    handleSubmit = () => {        
        this.props.onFormSubmit(this.state.variables);
    }

    handleChange = (event) => {
        const name = event.target.name || event.target.value;
        const value = event.target.name.value || event.target.value;
        
        this.setState(state => ({
            ...state,
            variables: {
                ...state.variables,
                [name]: value.toString()
            }
        }));
    }
    
    handleInputChange = (event) => {
        this.setState(state => ({
            ...state,
            variables: {
                ...state.variables,
                value: event.target.value
            }
        }));
    }

    render() {
        return (
            <section className="create-background">
                <MDBContainer>
                    <h3>Create Background</h3>
                    <small className="text-error text-danger">{this.props.error && this.props.error.message}</small>
                    <MDBRow>
                        <MDBCol md="12">
                            <Form className="needs-validation" submite={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="colorName">Primary color</label>
                                    <input 
                                        name="name" 
                                        type="color"
                                        className="form-control required" 
                                        id="colorName" 
                                        placeholder="Name"
                                        value={this.state.variables.name} 
                                        onChange={this.handleChange}
                                        required
                                        />
                                    <small id="emailHelp" className="form-text invalid-feedback"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="colorValue">Background color</label>
                                    <input 
                                        name="color" 
                                        type="color"
                                        className="form-control required" 
                                        id="colorValue" 
                                        placeholder="Color"
                                        value={this.state.variables.color} 
                                        onChange={this.handleChange}
                                        required
                                        />
                                    <small id="emailHelp" className="form-text invalid-feedback"></small>
                                </div>
                                <button type="submit">Submit</button>
                            </Form>
                        </MDBCol>
                        {/* <MDBCol md="12">
                            <Highlight className={`css ${this.props.css ? '' : 'hidden'}`}>
                                {this.props.css}
                            </Highlight>
                        </MDBCol> */}
                    </MDBRow>
                </MDBContainer>
            </section>
        )
    }
}

const mapStateToProps = state => {    
    return {
        error: state.backgroundReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFormSubmit: variables => dispatch(changeBackground(variables))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBackground);