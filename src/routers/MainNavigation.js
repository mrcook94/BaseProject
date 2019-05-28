import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import SplashScreen from "screens/splash/SplashScreen";

import * as screenNames from 'libraries/utils/screenNames'
import R from 'res/R'

const mainStack = createStackNavigator({
    [screenNames.SPLASH_SCREEN]: { screen: SplashScreen },
},
    {
        headerMode: 'none'
    }
)
const MainNavigation = createAppContainer(mainStack);
export default MainNavigation;
