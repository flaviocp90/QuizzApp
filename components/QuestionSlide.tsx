import { View, Dimensions, StyleSheet } from "react-native";
import React from "react";
import theme, { Box, Text } from "../utils/theme";
const { height, width } = Dimensions.get("window");

interface QuestionSlideProps {
  question: string;
  questionNr: number;
}

const QuestionSlide = ({ question, questionNr }: QuestionSlideProps) => {
  return (
    <Box {...{ width }} alignItems="center">
      <Text style={styles.textHeader}>Domanda numero {questionNr}</Text>
      <Text style={styles.textBody}>{question}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 27,
    marginTop: 16,
    color: theme.colors["white"],
    padding: 10,
    fontWeight: "700",
  },
  textBody: {
    fontSize: 20,
    marginTop: 40,
    color: theme.colors["white"],
    padding: 10,
    fontWeight: "600",
  },
});

export default QuestionSlide;
