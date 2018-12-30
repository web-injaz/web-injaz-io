import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import validate from '../utilities/validate';
import { connect } from 'react-redux';

const renderInput = ({input, label, type, meta: { touched, error }}) => {
    return (
        <div className="form-group">
            <label htmlFor={input.name}>{label}</label>
            <input {...input} className="form-control" type={type} placeholder={label} />
            { touched && error && <span className="help-block">{error}</span>}
        </div>
    )
}

// const renderCheck = ({input, label, type, meta: { touched, error }}) => {    
//     return (
//         <div className={`custom-control custom-${type}`}>
//             <input className="custom-control-input" {...input} type={type} placeholder={label} />
//             <label className="custom-control-label" htmlFor={input.name}>{label}</label>
//             { touched && error && <span className="help-block">{error}</span>}
//         </div>
//     )
// }

class ShaperForm extends Component
{
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className="shaper-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h4>Build a shape</h4>
                        <div className="mini-section">
                            <Field
                                name="shape_name"
                                type="text"
                                component={renderInput}
                                label="Shape name"
                            />
                            <Field
                                name="component_name"
                                type="text"
                                component={renderInput}
                                label="Component name"
                            />
                        </div>
                    </div>
                    <div className="form-section">
                        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>
                        Submit
                        </button>
                        <button type="button" className="btn btn-secondary" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {    
    return {
        form: state.form.shaperForm
    }
}

export default reduxForm({
    form: 'shaperForm',
    validate
})(connect(mapStateToProps)(ShaperForm));