import React, {useState} from 'react';
import {Alert} from 'react-native';
import Button from '../../components/Button';
import {Body, TextInput} from './styles';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirPass, setConfirPass] = useState('');

  const cadastrar = () => {
    if (nome !== '' && email !== '' && pass !== '' && confirPass !== '') {
      if (pass === confirPass) {
        auth()
          .createUserWithEmailAndPassword(email, pass)
          .then(() => {
            let userF = auth().currentUser;
            let user = {};
            user.nome = nome;
            user.email = email;
            firestore()
              .collection('users') //ref da coleção
              .doc(userF.uid) //chave do doc
              .set(user) //valor do doc
              .then(() => {
                console.log('SignUp, cadastrar: User added!');
                userF
                  .sendEmailVerification()
                  .then(() => {
                    Alert.alert(
                      'Informação',
                      'Foi enviado um e-mail de confirmação para' + email,
                    );
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{name: 'SignIn'}],
                      }),
                    );
                  })
                  .catch(e => {
                    console.log('SignIn: erro!!' + e);
                  });
              })
              .catch(e => {
                console.log('SignIn: erro!!' + e);
              });
          })
          .catch(e => {
            console.log('SignIn: erro!!' + e);
            switch (e.code) {
              case 'auth/email-already-in-use':
                Alert.alert('Erro', 'email já em uso');
                break;
              case 'auth/opperation-not-allowed':
                Alert.alert('Erro', 'Problemas ao fazer o cadastro');
                break;
              case 'auth/invalid-email':
                Alert.alert('Erro', 'Email inválido');
                break;
              case 'auth/weak-password':
                Alert.alert('Erro', 'Senha fraca. Digite uma senha forte.');
                break;
            }
          });
      } else {
        Alert.alert('Erro', 'As senha digitadas são diferentes');
      }
    } else {
      Alert.alert('Erro', 'Por favor, não deixe nenhum campo em branco.');
    }
  };
  return (
    <Body>
      <TextInput
        placeholder="Nome Completo"
        keyboardType="default"
        returnKeyType="next"
        onChangeText={t => setNome(t)}
        onEndEditing={() => this.emailTextInput.focus()}
      />
      <TextInput
        ref={ref => {
          this.emailTextInput = ref;
        }}
        placeholder="Email"
        keyboardType="email.adress"
        returnKeyType="next"
        onChangeText={t => setEmail(t)}
        onEndEditing={() => this.passTextInput.focus()}
      />
      <TextInput
        ref={ref => {
          this.passTextInput = ref;
        }}
        secureTextEntry={true}
        placeholder="Senha"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={t => setPass(t)}
        onEndEditing={() => this.confirmPassTextInput.focus()}
      />
      <TextInput
        ref={ref => {
          this.confirmPassTextInput = ref;
        }}
        secureTextEntry={true}
        placeholder="Confirmar Senha"
        keyboardType="default"
        returnKeyType="send"
        onChangeText={t => setConfirPass(t)}
      />
      <Button text="Cadastrar" onClick={cadastrar} />
    </Body>
  );
};

export default SignUp;
