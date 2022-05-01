// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Logo from '../images/logo.png';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Image style={styles.image} source={Logo} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity>
          <Text
            style={styles.forgot_button}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={styles.forgot_button}
            onPress={() => navigation.navigate('Register')}>
            Create Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.login_text}
            onPress={() => navigation.navigate('Home')}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text> {'\n'} </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginTop: 35,
    marginBottom: 15,
    height: '50%',
    width: '100%',
  },

  inputView: {
    backgroundColor: '#ff5d5d',
    borderRadius: 30,
    width: '100%',
    height: 40,
    marginBottom: 15,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
  },
  login_text:{
    color: "#ffffff",
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#ff5d5d',
  },
});
export default Login;
