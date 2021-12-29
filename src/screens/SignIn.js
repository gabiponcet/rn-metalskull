import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

import {CommonActions} from '@react-navigation/native';
import Button from '../components/Button';
import {COLORS} from '../assets/colors';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/firestore';

const SingIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const recoverPassword = () => {
    alert('Recuperar senha');
  };

  const login = () => {
    console.log(`${email} ${pass}`);
    if (email !== '' && pass !== '') {
      auth()
        .signInWithEmailAndPassword(email, pass)
        .then((res) => {
          database().collection('users')
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
        })
        .catch(e => {
          console.log('SignIn: erro ao fazer login' + e);
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro: usuário não cadastrado');
              break;
            case 'auth/wrong-password':
              Alert.alert('Erro: senha incorreta');
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
      Alert.alert('Erro', 'Preencha todos os campos.');
    }
  };

  const cadastrar = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignUp'}],
      }),
    );
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
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email.address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
            onEndEditing={() => this.passTextInput.focus()}
          />
          <TextInput
            /*  ref={ref => {
              this.passTextInput = ref;
            }} */
            style={styles.input}
            placeholder="Senha"
            keyboardType="default"
            returnKeyType="go"
            onChangeText={t => setPass(t)}
          />
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
