import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../utils/theme";

interface AnswerBtn {
  answer: string;
  onPress?: () => void;
}

const AnswerBtn = ({ onPress, answer }: AnswerBtn) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.buttonText}>{answer}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors["button"],
    marginBottom: 12,
    padding: 10,
    width: 350,
    borderRadius: theme.borderRadius['m']
  },
  buttonText: {
    color: theme.colors["white"],
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default AnswerBtn;
