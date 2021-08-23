import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import {COLORS} from '../assets/colors';

const SingIn = props => {
  const recoverPassword = () => {
    alert('Recuperar senha');
  };

  const login = () => {
    alert('Logar no sistema');
  };

  const cadastrar = () => {
    alert('vai para Sign UP');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.divSup}>
          <Image
            style={styles.image}
            source={require('../assets/images/base.png')}
            accessibilityLabel="logo MetalSkull"
          />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <Text style={styles.forgotPassword} onPress={recoverPassword}>
            Esqueci minha senha
          </Text>
          <Button text="ENTRAR" onClick={login} />
        </View>
        <View style={styles.divInf}>
          <View style={styles.divOUHr}>
            <View style={styles.divHr} />
            <Text style={styles.textOu}>OU</Text>
            <View style={styles.divHr} />
          </View>
          <View style={styles.divCadastro}>
            <Text style={styles.textNormal}>Não possui conta?</Text>
            <Text style={styles.textCadastro} onPress={cadastrar}>
              Cadastre-se
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingLeft: 2,
    paddingBottom: 1,
  },
  forgotPassword: {
    fontSize: 15,
    color: COLORS.accent,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
  divHr: {
    width: '30%',
    height: 1,
    borderBottomColor: COLORS.primaryLight,
    borderBottomWidth: 2,
  },
  divOUHr: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOu: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: COLORS.primaryLight,
  },
  divCadastro: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textNormal: {
    fontSize: 18,
    color: COLORS.primaryLight,
  },
  textCadastro: {
    fontSize: 16,
    color: COLORS.accent,
    marginLeft: 5,
  },
});
