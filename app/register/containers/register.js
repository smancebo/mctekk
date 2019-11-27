import React from 'react';
import { RegisterForm, RegisterContext } from '../components';
import validate from 'validate.js';
import { UserService } from '../../services';
import AsyncStorage from '@react-native-community/async-storage';
import { BackButton } from '../../shared';


const constraints = {
  email: {
    presence: { message: '^email is required', allowEmpty: false},
    email: true 
  },
  firstname: {
    presence: { message: '^firstname is required', allowEmpty: false }
  },
  lastname: {
    presence: { message: '^firstname is required', allowEmpty: false }
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      message: "must be at least 8 characters"
    }
  },
  verify_password: {
    equality: "password"
  }
};

export default class Register extends React.Component{

  static navigationOptions = ({navigation}) => ({
    title: 'Register',
    headerLeft:  <BackButton onPress={() => navigation.pop()} />
  })

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    verify_password: '',
    default_company: 'Empresa Prueba',
    errors: {}
  }

  onFieldChange = (name, value) => {
    this.setState({
      [name] : value
    })
  }

  onRegister = async () => {
    const errors = validate(this.state, constraints);
    console.log(errors)
    if(!errors){
      try {
        const { 
          firstname, 
          lastname, 
          email, 
          verify_password, 
          password, 
          default_company 
        } = this.state;

        this.props.loading(true)
        const { session: { token } } = await UserService.register({
          firstname,
          lastname,
          email,
          verify_password,
          password, default_company
        })


        await AsyncStorage.setItem('token', token)
        this.props.loading(false)
        this.props.navigation.navigate('Users')

        
      }catch(e){
       alert(e.message)
        this.props.loading(false)
      }
    }else {
      this.setState({ errors })
    }
  }
  render(){
    return (
      <RegisterContext.Provider value={{
        ...this.state,
        onFieldChange: this.onFieldChange,
        onRegister: this.onRegister
      }}>
        <RegisterForm  />
      </RegisterContext.Provider>
    )
  }
}