import { View,  Dimensions, StyleSheet } from "react-native";
import React from "react";
import theme, { Box, Text } from "../utils/theme";
const { height, width } = Dimensions.get("window");

interface QuestionSlideProps {
  question: string;
}

const QuestionSlide = ({ question }: QuestionSlideProps) => {
  return (
    <Box {...{ width }} alignItems="center">
      <Text style={styles.textHeader}>Question Nr</Text>
      <Text style={styles.textBody}>{question}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
    textHeader: {
    fontSize: 27,
    marginTop: 16,
    color: theme.colors['white'],
    padding: 16,
    fontWeight: '700'
  },
  textBody: {
    fontSize: 20,
    marginTop: 40,
    color: theme.colors['white'],
    padding: 16,
    fontWeight: '600'
  }
});

export default QuestionSlide;
