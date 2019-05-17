import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";

import App from "./pages/App"
import ConsultaMedico from './pages/ConsultaMedico'

const MedicoNavigation = createStackNavigator(
    ConsultaMedico
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
            MedicoNavigation
        },{
            initialRouteName: "AuthStack"
        }
    )
)