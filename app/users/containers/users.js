import React from 'react';
import { View } from 'react-native';
import { UserList } from '../components';
import { UserService } from '../../services';




export default class Users extends React.Component{

  state = {
    items: []
  }

  componentDidMount(){
    UserService.getAllUsers().then((items) => {
      this.setState({
        items
      })
    })
  }
  
  render(){
    const { items = [] } = this.state;
    return (
      <View style={{padding: 24, flex: 1, width: '100%'}}>
        <UserList 
          items={items}
        />
      </View>
    )
  }
}