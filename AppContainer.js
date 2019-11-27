import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from './app/login';
import { Users } from './app/users'

const AuthStack = createStackNavigator({
  Login: { screen: Login }
},{
  initialRouteName: 'Login'
})

const AppStack = createStackNavigator({
  Users: { screen: Users }
}, {
  initialRouteName: 'Users'
})

const SwitchNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
},{
  
})

const AppContainer = createAppContainer(createAppContainer(SwitchNavigator))


export default AppContainer;