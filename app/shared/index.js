import styled from 'styled-components/native';


const FieldContainer = styled.View`
  flex-direction: column;
  margin-bottom: 16px
`;

const Label = styled.Text`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8;
`;  
const Error = styled.Text`
  font-size: 10px;
  margin-bottom: 8;
  color: red;
  margin-top: 4px
`;  


export {  COLORS } from './constants';

export { default as Input } from './Input';

export { FieldContainer, Label, Error }

export { default as withLoading } from './withLoading'

export { default as BackButton } from './backButton'