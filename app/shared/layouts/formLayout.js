import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Layout = styled.View`
  padding: 24px;
  width: 100%;
  flex: 1
`;

const FormLayout = (props) => (
  <Layout>
    {props.children}
  </Layout>
)

export default FormLayout