import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';

const NameLabel = styled.Text`
  color: #000;
  font-weigth: 800;
`
const EmailLabel = styled.Text`
  color: #999;
`

const UserItem = ({item}) => {
  return (
    <View>
      <NameLabel>{`${item.firstName} ${item.lastName}`}</NameLabel>
      <EmailLabel>{`${item.email}`}</EmailLabel>
    </View>
  )
}

const UserList = (props) => {
  const { items = [] } = props
  return (
    <FlatList {...props}
      style={{width: '100%'}}
      items={items}
      renderItem={({item, index}) => <UserItem item={item} /> }
    />
  )
}

export default UserList