import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import theme from "../../utils/theme";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  bottom: {
    backgroundColor: theme.colors["primary"],
    height: height * 0.35,
    width: width,
    bottom: 0,
    padding: 20,
    alignSelf: "center",
    position: "absolute",
    flex: 1,
    alignItems: 'center',
  },
  header: {
      color: theme.colors['white'],
      textAlign: 'center',
      fontWeight: '800',
      fontSize: 35,
      padding: 10
  },
  body:{
    color: theme.colors['white'],
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    padding: 10,
    marginBottom: 20
}
});

export default styles;
