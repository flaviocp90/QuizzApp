import { StatusBar } from "expo-status-bar";
import MainNavigator from "./navigations";
import { NavigationContainer } from "@react-navigation/native"; 
import theme from "./utils/theme";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors['primary']} style='light'/>
      <MainNavigator />
    </NavigationContainer>
  );
}
