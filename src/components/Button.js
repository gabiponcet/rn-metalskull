import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {COLORS} from '../assets/colors';

const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => {
        props.onClick();
      }}>
      <Text>{props.text}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: COLORS.primaryDark,
  },
  button: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

