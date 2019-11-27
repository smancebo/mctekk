import React from 'react';
import { View , Button} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input, FieldContainer, Label, Error } from '../../shared';
import { FormLayout } from '../../shared/layouts';
import { withRegisterContext } from './registerContext';

const RegisterForm = (props) => {
  const { 
   register
  } = props;

  const { 
    firstname, 
    lastname, 
    email, 
    password, 
    verify_password, 
    onFieldChange,
    onRegister,
    errors = {}
  } = register;
  return (
    <KeyboardAwareScrollView extraHeight={120}>
      <FormLayout>
        <FieldContainer>
          <Label>Firstname</Label>
          <Input 
            value={firstname}
            textContentType={'givenName'}
            onChangeText={(value) => onFieldChange('firstname', value)} />
          <Error>{errors.firstname}</Error>
        </FieldContainer>
        <FieldContainer>
          <Label>Lastname</Label>
          <Input 
            textContentType={'familyName'}
            value={lastname} 
            onChangeText={(value) => onFieldChange('lastname', value)} />
            <Error>{errors.lastname}</Error>
        </FieldContainer>
        <FieldContainer>
          <Label>Email</Label>
          <Input 
            value={email} 
            textContentType={'emailAddress'}
            onChangeText={(value) => onFieldChange('email', value)} />
            <Error>{errors.email}</Error>
        </FieldContainer>
        <FieldContainer>
          <Label>Password</Label>
          <Input 
            secureTextEntry={true}
            value={password}
            textContentType='newPassword'
            onChangeText={(value) => onFieldChange('password', value)} />
            <Error>{errors.password}</Error>
        </FieldContainer>
        <FieldContainer>
          <Label>Confirm Password</Label>
          <Input 
            value={verify_password} 
            textContentType='newPassword'
            secureTextEntry={true}
            onChangeText={(value) => onFieldChange('verify_password', value)} />
            <Error>{errors.verify_password}</Error>
        </FieldContainer>
        <FieldContainer>
          <Button title='Register' onPress={onRegister} />
        </FieldContainer>
      </FormLayout>
    </KeyboardAwareScrollView>
  )
}

export default withRegisterContext(RegisterForm);