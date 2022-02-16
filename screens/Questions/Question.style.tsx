import { StyleSheet, Dimensions } from "react-native";
import theme from "../../utils/theme";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { questions } from "./data";
import { multiply } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors['primary'],
        height: verticalScale(height * 0.35),
    },
    AnswerContainer: {
        flex: 1,
        backgroundColor: theme.colors['white'],
        height: height * 0.4,
        paddingTop: 16
    },
    btnContainer: {
        flex: 1
    },
    loadContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors['primary'],
        flex: 1
    },
    loadText:{
        color: theme.colors['white'],
        fontSize: 25,
        fontWeight: '900'
    },
    textModal: {
        fontSize: moderateScale(25),
        marginBottom: 16,
        color: 'black',
        textAlign: 'center'
    },
    percentText: {
        textAlign: 'center',
        marginBottom: 16
    },
    modalText: {
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 16
    },
    resultText: {
        textAlign: 'center',
        marginBottom: 16,
        fontSize: 14
    }
});

export default styles;
