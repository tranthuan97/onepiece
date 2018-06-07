import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../../Screens/LoginScreen';

// https://reactnavigation.org/docs/en/stack-navigator.html

const routeConfigs = {
  // IntroScreen: {
  //   screen: IntroScreen,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  // CourseScreen: {//IGNORE
  //   screen: CourseScreen,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // SelectSessionTypeScreen: {//DEMO - 1
  //   screen: SelectSessionTypeScreen,
  //   navigationOptions: {
  //     title: 'SelectSessionType screen'
  //   }
  // }
}

const stackNavigatorConfig = {
  initialRouteName: 'LoginScreen',
  cardStyle: {
    backgroundColor: '#ffffff',
    
  },
}

export default createStackNavigator(routeConfigs, stackNavigatorConfig);