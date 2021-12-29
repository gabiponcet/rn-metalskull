import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Home() {
  const [counter, setCounter] = useState(0);

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };

  const count = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <View>
      <Text style={styles.text}>Olá, metaleiros</Text>
      <Text style={styles.text}>Contador = {counter}</Text>

      <Button text="save" onClick={count} />
      <Button text="reset" onClick={reset} />
    </View>
  );
}

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