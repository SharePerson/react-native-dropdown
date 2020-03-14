import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ReactNativeMaterialDropdownScreen from './src/screens/plugins/ReactNativeMaterialDropdown';

const navigator = createStackNavigator({
  Home: HomeScreen,
  RNMD: ReactNativeMaterialDropdownScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'React Native Dropdown'
  }
});

export default createAppContainer(navigator);