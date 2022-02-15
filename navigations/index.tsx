import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./RootStackParams";
import Welcome from "../screens/Welcome/Welcome";
import Question from "../screens/Questions/Question";
import { Dimensions } from "react-native";

const Stack = createStackNavigator<RootStackParamList>() 

const MainNavigator: React.FC = () => {
    return(
        <Stack.Navigator initialRouteName="Question" screenOptions={{headerShown: false}} >
            <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Home'}} />
            <Stack.Screen name="Question" component={Question} />
        </Stack.Navigator>
    )
}

export default MainNavigator;