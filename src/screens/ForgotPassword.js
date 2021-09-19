import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Alert} from 'react-native';

import {COLORS} from '../assets/colors';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const recoverPassword = () => {
    if (email !== '') {
      console.log(email);
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert(
            'Atenção:',
            'Enviamos um email para o seguinte endereço: ' + email,
            [{text: 'OK', onPress: () => navigation.goBack()}],
          );
        })
        .catch(e => {
          console.log('ForgotPassword: recoverPassword' + e);
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro: usuário não cadastrado');
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro: e-mail inválido');
              break;
            case 'auth/user-disabled':
              Alert.alert('Erro: usuário desabilitado');
              break;
          }
        });
    } else {
      Alert.alert('Atenção: ', 'Por favor, digite um e-mail válido.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email.address"
        returnKeyType="go"
        onChangeText={t => setEmail(t)}
        autoFocus={true}
      />
      <Button text="Recuperar senha" onClick={recoverPassword} />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '95%',
    height: 50,
    borderColor: COLORS.primaryLight,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingLeft: 2,
    paddingBottom: 1,
    marginTop: 40,
  },
});
