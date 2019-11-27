import React from 'react';
import { View, Text, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Form } from '../components';
import { UserService } from '../../services';
import AsyncStorage from '@react-native-community/async-storage';
import validate from 'validate.js';

const LoginForm = styled.View`
  padding: 24px;
  flex: 1;
  padding-top: 60px
`;

const constraints = {
  email: {
    presence: { message: '^email is required', allowEmpty: false }
   
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      message: "must be at least 8 characters"
    }
  }
};

class Login extends React.Component{

  state = {
    email: '',
    password: '',
    errors: {}
  }

  onLoginPressed = async() => {
    try {
      const errors = validate(this.state, constraints);
      if(!errors){
        const { email, password } = this.state;
        this.props.loading(true)
        const { token } = await UserService.authenticate({ email, password })
        this.props.loading(false)
        AsyncStorage.setItem('token', token)
        this.props.navigation.navigate('Users')
      }else {
        this.setState({ errors })
      }
    }catch(e){
      this.props.loading(false)
      Alert.alert(e.message)
    }
   
  }

  onFormChanged = (field, value) => {
    this.setState({
      [field] : value
    })
  }

  onRegisterPressed = () => {
    this.props.navigation.navigate('Register')
  }

  render(){
    return (
      <LoginForm>
        <Form
          errors={this.state.errors}
          onFormChanged={this.onFormChanged}
          onLoginPressed={this.onLoginPressed}
          onRegisterPressed={this.onRegisterPressed}
        />
      </LoginForm>
    )
  }
}

export default Login;
