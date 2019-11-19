import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/home';
import StatusBarColorChanger from './src/StatusBarColorChanger';
import AboutPage from './src/about';
import ContactPage from './src/contact';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ColorChanger: StatusBarColorChanger,
    About: AboutPage,
    Contact: ContactPage
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
