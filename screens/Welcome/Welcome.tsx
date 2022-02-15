import { View, SafeAreaView, Dimensions, Image, Text } from "react-native";
import React from "react";
import styles from "./Welcome.style";
import { Box } from "../../utils/theme";
const { width, height } = Dimensions.get("window");
import { verticalScale, moderateScale } from "react-native-size-matters";
import Animated from "react-native-reanimated";
import { Button } from "../../components";
import { RootStackParamList } from "../../navigations/RootStackParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const welcomeAssets = require("../../assets/images/undraw_Questions_re_1fy7.png");

const Welcome = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Welcome">) => {
  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} justifyContent='flex-end'>
        <Box height={height} justifyContent="center" alignItems="center">
          <Box
            height={verticalScale(250)}
            width={moderateScale(250)}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              source={welcomeAssets}
              style={{ flex: 1, width: 400, height: 400 }}
              resizeMode="contain"
            />
          </Box>
        </Box>
        <Animated.View style={styles.bottom}>
          <Text style={styles.header}>Quiz App</Text>
          <Text style={styles.body}>Prova le tue abilità</Text>
          <Button
            text="Inizia"
            onPress={() => {navigation.navigate('Question')}}
            width={"80%"}
          />
        </Animated.View>
      </Box>
    </SafeAreaView>
  );
};

export default Welcome;
