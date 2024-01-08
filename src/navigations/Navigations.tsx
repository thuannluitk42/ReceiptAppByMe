/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import SlashScreen from '../screens/slashscreen/SlashScreen';
import Home from '../screens/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ICONS, SCREENS } from "../constant/constant"
import Search from "../screens/search/Search";
import BookMark from "../screens/bookmark/BookMark";
import { TabIcon } from "../components/TabIcon";
import Setting from '../screens/setting/Setting';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export const MainNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        
        <Stack.Screen name={SCREENS.TAB} component={TabNavigation} />
        <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SlashScreen} />
    </Stack.Navigator>
)

export const TabNavigation = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                elevation: 0,
                backgroundColor: COLORS.white
            }
        }}
    >
        
        <Tab.Screen name={SCREENS.HOME} component={Home}
            options={{
                tabBarIcon: ({focused}) => <TabIcon image={ICONS.home} focused={focused} />
            }}
        />
        <Tab.Screen name={SCREENS.SEARCH} component={Search} 
             options={{
                tabBarIcon: ({focused}) => <TabIcon image={ICONS.search} focused={focused} />
            }}
        />
        <Tab.Screen name={SCREENS.BOOKMARK} component={BookMark}
            options={{
                tabBarIcon: ({focused}) => <TabIcon image={ICONS.bookmark} focused={focused} />
            }}
        />
        <Tab.Screen name={SCREENS.SETTING} component={Setting}
            options={{
                tabBarIcon: ({focused}) => <TabIcon image={ICONS.setting} focused={focused} />
            }}
        />
    </Tab.Navigator>
)