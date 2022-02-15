import { View, Text, StyleSheet } from "react-native";
import React, { Fragment } from "react";
import AnswerBtn from "./AnswerBtn";

interface AnswersProps {
  answers: string[];
  onPress?: () => void;
}

const Answers = ({ answers }: AnswersProps) => {
  return (
    <View style={styles.container}>
      {answers.map((_, index) => (
        <Fragment key={index}>
          <AnswerBtn answer={answers[index]} onPress={() => {}} />
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
});

export default Answers;
