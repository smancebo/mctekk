import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';



const FieldContainer = styled.View`
  flex-direction: column;
  margin-bottom: 16px
`;

const Label = styled.Text`
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 8;
`;  
const Error = styled.Text`
  font-size: 10px;
  
  margin-bottom: 8;
  color: red;
  margin-top: 4px
`;  

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #999;
  height: 40px;
  border-radius: 4px;
  padding-horizontal: 8
`;

const LoginForm = (props) => {

  const { onLoginPressed, onFormChanged, errors = {} } = props;

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
      <Button title='Login' onPress={onLoginPressed} />
    </View>
  )
}


export default LoginForm