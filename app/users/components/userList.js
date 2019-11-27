import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';

const NameLabel = styled.Text`
  color: #000;
  font-weight: 800;
`
const EmailLabel = styled.Text`
  color: #999;
`

const UserItemContainer = styled.View`
  border-bottom-width: 1px;
  border-color: #999;
  padding-vertical: 16px
`;

const UserItem = ({item}) => {
  return (
    <UserItemContainer style={{flex: 1}}>
      <NameLabel>{`${item.firstname} ${item.lastname}`}</NameLabel>
      <EmailLabel>{`${item.email}`}</EmailLabel>
    </UserItemContainer>
  )
}

const UserList = (props) => {
  const { items = [] } = props
  return (
    <FlatList {...props}
      style={{width: '100%'}}
      data={items}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => <UserItem item={item} />} 
    />
  )
}

export default UserList