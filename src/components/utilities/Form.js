import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.formElem = React.createRef();
        this.state = {
            isValidated: false
        }
    }

    validate = () => {
        const arr = this.formElem.current.querySelectorAll('input');
        
        if(this.formElem.current.checkValidity() === false){
            arr.forEach(inputElem => {
                const errorLabel = inputElem.parentNode.querySelector('.invalid-feedback');
                
                if(errorLabel && inputElem.nodeName.toLowerCase() !== 'button') {
                    
                    if(!inputElem.validity.valid) {
                        errorLabel.textContent = inputElem.validationMessage;
                    } else {
                        errorLabel.textContent = '';
                    }
                }
            });

            return false;
        } else {
            arr.forEach(inputElem => {
                const errorLabel = inputElem.parentNode.querySelector('.invalid-feedback');

                if(errorLabel && inputElem.nodeName.toLowerCase() !== 'button') {
                    errorLabel.textContent = '';
                }
            });

            return true;
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        if(this.validate()) {
            this.props.submite();
        }

        this.setState({
            isValidated: true
        });
    }

    render() {
        const props = {...this.props};

        delete props.submite;

        let className= [];

        if(props.className) {
            className = [props.className];
            delete props.className;
        }

        if(this.state.isValidated) {
            className += (' was-validated');
        }

        return (
            <form ref={this.formElem} onSubmit={this.submitHandler} {...props} className={className} noValidate>
                {this.props.children}
            </form>
        )
    }
}

export default Form;