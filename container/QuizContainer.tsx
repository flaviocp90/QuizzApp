import { View, Text } from "react-native";
import React, { ReactElement } from "react";
import styles from './QuizContainer.style';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";


interface QuizContainerProps {
  children: ReactElement;
}

const QuizContainer = ({ children }: QuizContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

export default QuizContainer;
