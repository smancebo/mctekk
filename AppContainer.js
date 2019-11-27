import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from './app/login';
import { Users } from './app/users';
import { Register } from './app/register';
import { withLoading } from './app/shared';


const RegisterStack = createStackNavigator({
  Register: { screen: withLoading(Register) }
},{
  initialRouteName: 'Register'
})

const AuthStack = createStackNavigator({
  Login: { screen: withLoading(Login) },
  RegisterStack
},{
  initialRouteName: 'Login',
  headerMode: 'none'
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