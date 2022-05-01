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

const Register= ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text> {'\n'} </Text>
        <Image style={styles.image} source={Logo} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
          />
        </View>

        
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
          
          <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password again"
            placeholderTextColor="#003f5c"
          />
        </View>

          



        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Login')}>
            Register
          </Text>
        </TouchableOpacity>
        <Text> {'\n'} </Text>
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
loginText: {
  color: "#ffffff",
},
  image: {
    marginBottom: 40,
    height: '40%',
    width: '100%',
  },

  inputView: {
    backgroundColor: '#ff5d5d',
    borderRadius: 30,
    width: '100%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
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
export default Register;
