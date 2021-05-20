import React from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import Button from '../components/Button';
import {COLORS} from '../assets/colors';

const SingIn = props => {
  const recoverPassword = () => {
    alert('Recuperar senha');
  }
  const login = () => {
    alert('Logar no sistema');
  }
  return (
    <View style={styles.container}>
      <View style={styles.divSup}>
        <Image
          style={styles.image}
          source={require('../assets/images/base.png')}
          accessibilityLabel="logo MetalSkull"
        />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Text style={styles.forgotPassword} onPress={recoverPassword}>Esqueci minha senha</Text>
        <Button text='Entrar' onClick={login}/>
      </View>
      <View style={styles.divInf} />
      <View />
      <Text>Não possui conta?</Text>
      <Text>Cadastre-se</Text>
    </View>
  );
};

export default SingIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.primaryDark,
  },
  divSup: {
    flex: 5,
    alignItems: 'center',
  },
  divInf: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
  input: {
    width: '95%',
    height: 50,
    borderColor: COLORS.primaryLight,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingLeft:2,
    paddingBottom: 1, 
  },
  forgotPassword: {
    fontSize: 15,
    color: COLORS.accent,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  }
});
