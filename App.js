import 'react-native-gesture-handler'; //deve ser no topo essa importação
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import {StatusBar} from 'react-native';
import {COLORS} from './src/assets/colors';
import ForgotPassword from './src/screens/ForgotPassword';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} />
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} options={signInStyle} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={forgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const signInStyle = {
  headerLeft: false,
  title: 'Bem vindo',
  headerStyle: {backgroundColor: COLORS.primary},
  headerTitleStyle: {color: COLORS.accentSecundary},
};

const forgotPassword = {
  title: 'Recuperação de senha',
  headerStyle: {backgroundColor: COLORS.primary},
  headerTitleStyle: {color: COLORS.accentSecundary},
  headerTintColor: COLORS.accent,
};