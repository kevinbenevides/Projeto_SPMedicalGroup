import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';

import App from "./pages/App"
import Consultas from './pages/Consultas'

const MainNavigation = createStackNavigator(
    {
        Consultas
    }
)

const AuthStack = createStackNavigator(
    { 
        App
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
            MainNavigation
        },
        {
            initialRouteName: "AuthStack"
        }
    )
)                                                                           