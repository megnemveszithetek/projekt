// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 12 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Just Do It!
            
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={{color:'white'}}>Profile</Text>
          </TouchableOpacity>
          <Text>{"\n"} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('GetStarted')}>
            <Text style={{color:'white'}}>Get started</Text>
          </TouchableOpacity>
          <Text>{"\n"} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Diet')}>
            <Text style={{color:'white'}}  onPress={() => {navigation.navigate('Excersise');}} >Get fit!</Text>
          </TouchableOpacity>
          <Text>{"\n"} </Text>
          <TouchableOpacity
            style={styles.button}>
            <Text style={{color:'white'}}
            onPress={() => {navigation.navigate('Food');}}>
            The delicious things</Text>
          </TouchableOpacity>
          <Text>{"\n"} </Text>
            <TouchableOpacity
            style={styles.logoutbutton}
            onPress={() => {navigation.navigate('Login');}}>
            <Text style={{color:'white'}}>Log out</Text>
          </TouchableOpacity>
        </View>
        
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 40,
    backgroundColor: 'red',
  },
  logoutbutton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
export default Home;
