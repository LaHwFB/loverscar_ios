import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";

const ButtonBackground = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    width: '95%'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black'
  }
});

export default ButtonBackground;
