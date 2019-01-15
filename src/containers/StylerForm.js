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

const renderCheck = ({input, label, type, meta: { touched, error }}) => {    
    return (
        <div className={`custom-control custom-${type}`}>
            <input className="custom-control-input" {...input} type={type} placeholder={label} />
            <label className="custom-control-label" htmlFor={input.name}>{label}</label>
            { touched && error && <span className="help-block">{error}</span>}
        </div>
    )
}

class StylerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        }
    }
    toggleBgMore = () => {
        this.setState(state => ({
            showMore: !state.showMore
        }));
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <h4>Add main colors</h4>
                    <div className="mini-section">
                        <Field
                            name="primary"
                            type="color"
                            component={renderInput}
                            label="Primary Color"
                        />
                        <Field
                            name="secondary"
                            type="color"
                            component={renderInput}
                            label="Secondary Color"
                        />
                    </div>
                </div>
                <div className="form-section">
                    <h4>Create background</h4>
                    <div className="mini-section">
                        <Field
                            name="name"
                            type="text"
                            component={renderInput}
                            label="Background Name"
                        />
                        <Field
                            name="background"
                            type="color"
                            component={renderInput}
                            label="Background Color"
                        />
                        <div className="btn btn-primary show-more-btn" onClick={() => this.toggleBgMore()}>More options</div>
                        <div className={`show-more mini-section ${this.state.showMore ? '' : 'hidden'}`}>
                            <Field
                                name="light_inverse"
                                type="color"
                                component={renderInput}
                                label="Light Inverse"
                            />
                            <Field
                                name="dark_inverse"
                                type="color"
                                component={renderInput}
                                label="Dark Inverse"
                            />
                            <Field
                                name="text"
                                type="color"
                                component={renderInput}
                                label="Background Text"
                            />
                            <Field
                                name="headers"
                                type="color"
                                component={renderInput}
                                label="Headers Color"
                            />
                            <Field
                                name="links"
                                type="color"
                                component={renderInput}
                                label="Links Color"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-section">
                    <h4>Control variables</h4>
                    <div className="mini-section">
                        <Field
                            name="enable_default_root"
                            type="checkbox"
                            component={renderCheck}
                            label="Enable default root"
                        />
                        <Field
                            name="enable_inverse"
                            type="checkbox"
                            component={renderCheck}
                            label="Enable inverse"
                        />
                        <Field
                            name="enable_contrast"
                            type="checkbox"
                            component={renderCheck}
                            label="Enable contrast"
                        />
                        <Field
                            name="enable_trans"
                            type="checkbox"
                            component={renderCheck}
                            label="Enable trans"
                        />
                        <Field
                            name="enable_gray"
                            type="checkbox"
                            component={renderCheck}
                            label="Enable gray"
                        />
                        <Field
                            name="enable_darken"
                            type="checkbox"
                            component={renderCheck}
                            label="Enable darken"
                        />
                        <Field
                            name="enable_lighten"
                            type="checkbox"
                            component={renderCheck}
                            label="Enable lighten"
                        />
                    </div>
                </div>
                <div className="form-section">
                    <h4>Import components</h4>
                    <div className="mini-section">
                            <Field
                                name="components"
                                value="all"
                                type="radio"
                                component={renderCheck}
                                label="All components"
                            />
                            <Field
                                name="components"
                                defaultChecked={true}
                                value="specific"
                                type="radio"
                                component={renderCheck}
                                label="Choose components"
                            />
                            <div className={`other-components ${(this.props.form && this.props.form.values && this.props.form.values.components !== 'specific') ? 'hidden' : ''}`}>
                                {
                                    this.props.shapesList && this.props.shapesList.map(comp => {
                                        return (
                                            <Field
                                                name={comp.name}
                                                key={comp.name}
                                                type="checkbox"
                                                component={renderCheck}
                                                label={comp.name}
                                            />
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
                <div className="form-section">
                    <h4>Import shapes</h4>
                    <div className="mini-section">
                            <Field
                                name="shapes"
                                value="all"
                                type="radio"
                                component={renderCheck}
                                label="All shapes"
                            />
                            <Field
                                name="shapes"
                                defaultChecked={true}
                                value="specific"
                                type="radio"
                                component={renderCheck}
                                label="Choose shapes"
                            />
                            <div className={`other-components ${(this.props.form && this.props.form.values && this.props.form.values.shapes !== 'specific') ? 'hidden' : ''}`}>
                                {
                                    this.props.shapesList && this.props.shapesList.map(comp => {
                                        return comp.shapes && comp.shapes.map(shape => {
                                            return (
                                                <Field
                                                    name={shape.shape}
                                                    key={shape.shape}
                                                    type="checkbox"
                                                    component={renderCheck}
                                                    label={`${comp.name} - ${shape.shape}`}
                                                />
                                            )
                                        })
                                    })
                                }
                        </div>
                    </div>
                </div>
                <div className="form-section">
                    <button type="submit" className="btn btn-primary" disabled={submitting}>
                    Submit
                    </button>
                    <button type="button" className="btn btn-secondary" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {    
    return {
        form: state.form.stylerForm,
        shapesList: state.shapes.shapesList
    }
}

export default reduxForm({
    form: 'stylerForm',
    validate,
    initialValues: {
        primary: '#a3dbfa',
        secondary: '#bf99ea',
        name: 'dark',
        background: '#343a40',
        enable_default_root: true,
        enable_inverse: true,
        enable_contrast: true,
        enable_trans: true,
        enable_gray: true,
        enable_darken: false,
        enable_lighten: false,
    }
})(connect(mapStateToProps)(StylerForm));