import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class UserForm extends Component {
    
    renderInput = ({ input, label, type, meta: { touched, error } }) => {
        console.log(this.props.errors);
        
        return (
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <input {...input} className="form-control" type={type} placeholder={label} />
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="user-form">
                <h5>{this.props.mode === 'signup' ? 'Create new account' : 'Login to your account'}</h5>
                <form onSubmit={handleSubmit} noValidate>
                    <Field
                        name="email"
                        type="email"
                        label="Email"
                        component={this.renderInput}
                    />
                    {this.props.res && this.props.res['email'] && <span className="help-block">{this.props.res['email']}</span>}
                    <Field
                        name="password"
                        type="password"
                        label="Password"
                        component={this.renderInput}
                    />
                    {this.props.res && this.props.res['password'] && <span className="help-block">{this.props.res['password']}</span>}
                    <button type="submit" className="btn btn-primary">{this.props.mode === 'signup' ? 'SIGN UP' : 'LOG IN'}</button>
                    <small onClick={() => this.props.changeMode()} className="text-muted">{this.props.mode === 'signup' ? 'LOG IN' : 'SIGN UP' }</small>
                    {this.props.mode === 'signup' && this.props.res && this.props.res.status === 200 && alert('Registerd succefully')}
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'userForm'
})(UserForm);