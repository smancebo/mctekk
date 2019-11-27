
import React from 'react';
import { View, Text, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from './constants';
import styled from 'styled-components/native';
const Button = styled.TouchableOpacity`
  padding-horizontal: 18
`;

const BackButton = (props) => {
  const { tint = COLORS.BLUE_TEXT, title='Back', ...rest } = props;
  return (
    <Button {...rest} >
      {
        Platform.OS === 'android' ? (
          <Ionicons name='md-arrow-back' size={32} color={tint} />
        ): (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name='ios-arrow-back' size={32} color={tint} style={{marginRight: 6}} />
            {
              title && (<Text style={{color: tint, fontSize: 17}}>{title}</Text>)
            }
            
          </View>
        )
      }
    </Button>
  );
};

export default BackButton;