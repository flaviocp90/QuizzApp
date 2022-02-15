import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../utils/theme";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  width?: string;
}

export default function Button({ text, onPress, width }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{width: width}}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: theme.colors["button"],
  },
  buttonText: {
    color: theme.colors["white"],
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: 'center',
  },
});
