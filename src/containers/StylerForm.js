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
                                <Field
                                    name="select2"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="select2"
                                />
                                <Field
                                    name="datepicker"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="datepicker"
                                />
                                <Field
                                    name="headerSection"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="header-section"
                                />
                                <Field
                                    name="panel"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="panel"
                                />
                                <Field
                                    name="navbar"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="navbar"
                                />
                                <Field
                                    name="carousel"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="carousel"
                                />
                                <Field
                                    name="alert"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="alert"
                                />
                                <Field
                                    name="badge"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="badge"
                                />
                                <Field
                                    name="breadcrumb"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="breadcrumb"
                                />
                                <Field
                                    name="buttonGroup"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="button-group"
                                />
                                <Field
                                    name="buttons"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="buttons"
                                />
                                <Field
                                    name="card"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="card"
                                />
                                <Field
                                    name="code"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="code"
                                />
                                <Field
                                    name="customForms"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="custom-forms"
                                />
                                <Field
                                    name="forms"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="forms"
                                />
                                <Field
                                    name="dropdown"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="dropdown"
                                />
                                <Field
                                    name="inputGroup"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="input-group"
                                />
                                <Field
                                    name="jumbotron"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="jumbotron"
                                />
                                <Field
                                    name="listGroup"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="list-group"
                                />
                                <Field
                                    name="media"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="media"
                                />
                                <Field
                                    name="modal"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="modal"
                                />
                                <Field
                                    name="nav"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="nav"
                                />
                                <Field
                                    name="pagination"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="pagination"
                                />
                                <Field
                                    name="popover"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="popover"
                                />
                                <Field
                                    name="progress"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="progress"
                                />
                                <Field
                                    name="tables"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="tables"
                                />
                                <Field
                                    name="tooltip"
                                    type="checkbox"
                                    component={renderCheck}
                                    label="tooltip"
                                />
                        </div>
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
        )
    }
}

const mapStateToProps = state => {    
    return {
        form: state.form.stylerForm
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