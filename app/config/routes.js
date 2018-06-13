import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

// All screens below.
import Home from '../screens/Home';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    headerMode: 'screen',
  },
);


export default createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
  },
  {
    mode: 'screen',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  },
);
