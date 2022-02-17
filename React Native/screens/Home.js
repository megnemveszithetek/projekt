// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const Home = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
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
            Home screen
            
          </Text>
          <Text>{"\n"} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FoodCalorieCounter')}>
            <Text style={{color:'white'}}>Get started</Text>
          </TouchableOpacity>
          <Text>{"\n"} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Diet')}>
            <Text style={{color:'white'}}>Some random button</Text>
          </TouchableOpacity>
          
        </View>
        
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
export default Home;
