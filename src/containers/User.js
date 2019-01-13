import React, { Component } from 'react'
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { signinAction, signupAction } from '../actions';

class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mode: 'signup'
      }
    }
    
    changeMode = () => {
        this.setState(state => {
            if(state.mode === 'signup') return {...state, mode: 'login'}
            else return {...state, mode: 'signup'}
        });
    }

    submitHandler = values => {
        if(this.state.mode === 'signup') 
            this.props.signup(values);
        else
            this.props.signin(values);
    }

    render() {
        console.log(this.props.res);
        
        return (
            <div>
                <UserForm 
                    onSubmit={this.submitHandler} 
                    mode={this.state.mode}
                    changeMode={() => this.changeMode()}
                    res={this.props.res}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    res: state.user.res
});

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(signupAction(userData)),
  signin: userData => dispatch(signinAction(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);