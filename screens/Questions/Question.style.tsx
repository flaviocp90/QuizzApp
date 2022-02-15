import { StyleSheet, Dimensions } from "react-native";
import theme from "../../utils/theme";
import { verticalScale } from "react-native-size-matters";
import { questions } from "./data";
import { multiply } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors['primary'],
        height: verticalScale(height * 0.3),
    },
    AnswerContainer: {
        flex: 1,
        backgroundColor: theme.colors['white'],
        height: height * 0.4,
        paddingTop: 16
    },
    btnContainer: {
        flex: 1
    }
});

export default styles;
