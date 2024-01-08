/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../constant/constant';
import SlashScreen from '../screens/slashscreen/SlashScreen';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SlashScreen} />
    <Stack.Screen name={SCREENS.HOME} children={Home} />
  </Stack.Navigator>
);
