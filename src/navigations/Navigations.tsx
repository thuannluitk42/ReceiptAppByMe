import { createStackNavigator } from "@react-navigation/stack"
import { SCREENS } from "../constant/constant"
import SlashScreen from "../screens/slashscreen/Slashscreen"
import Home from "../screens/home/Home"

const Stack = createStackNavigator()

export const MainNavigation = () => (
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name= {SCREENS.SPLASHSCREEN} component={SlashScreen}></Stack.Screen>
    <Stack.Screen name= {SCREENS.HOME} children={Home}></Stack.Screen>
</Stack.Navigator>
)
