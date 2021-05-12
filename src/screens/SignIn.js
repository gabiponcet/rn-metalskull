import React from 'react';
import {View, Text} from 'react-native';

const SingIn = (props) => {
  return (
    <View>
      <Text onPress={() => props.navigation.navigate('Home')}>Home</Text>
      <Text onPress={() => props.navigation.navigate('SignUp')}>Sign Up</Text>
    </View>
  );
};

export default SingIn;
