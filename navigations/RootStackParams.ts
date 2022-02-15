import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
    Welcome: undefined;
    Question: undefined;
}

export type RootNavigatorParamsList = {
    Welcome: NavigatorScreenParams<RootStackParamList>;
    Question: NavigatorScreenParams<RootStackParamList>;
}
