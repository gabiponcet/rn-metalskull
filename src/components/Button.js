import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';

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
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f5f',
    padding: 10,
    margin: 10,
  },
});

