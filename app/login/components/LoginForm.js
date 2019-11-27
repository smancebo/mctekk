import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { COLORS, FieldContainer, Label, Error, Input } from '../../shared';


const RegisterButton = styled.Text`
  color: ${COLORS.BLUE_TEXT};
  text-decoration-line: underline;
  text-align: center
`;

const LoginForm = (props) => {

  const { 
    onLoginPressed, 
    onFormChanged, 
    errors = {},
    onRegisterPressed 
  } = props;

  return (
    <View>
      <FieldContainer>
        <Label>Email</Label>
        <Input 
          autoCapitalize={'none'} 
          textContentType='emailAddress'
          onChangeText={(text) =>  onFormChanged('email', text)}
        />
      <Error>{errors.email}</Error>
      </FieldContainer>
      <FieldContainer>
        <Label>Password</Label>
        <Input 
          secureTextEntry={true}
          autoCapitalize={'none'}
          onChangeText={(text) =>  onFormChanged('password', text)}
        />
        <Error>{errors.password}</Error>
      </FieldContainer>
      <FieldContainer>
        <Button title='Login' onPress={onLoginPressed} />
      </FieldContainer>
      <FieldContainer>
        <RegisterButton onPress={onRegisterPressed}>Register</RegisterButton>
      </FieldContainer>
    </View>
  )
}


export default LoginForm