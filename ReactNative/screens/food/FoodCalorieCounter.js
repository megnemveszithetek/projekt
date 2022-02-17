// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';


const FoodCalorieCounter = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{"\n"} </Text>
          <Text>{"\n"} </Text>
          <Text>{"\n"} </Text>
          <Text
            style={{
              color:'red',
              fontWeight:'bold',
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Food Calorie Counter
          </Text>
          <Text>{"\n"} </Text>
          <Text>{"\n"} </Text>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex: 1}}>
          <TextInput
              style={styles.input}
              onPress={Keyboard.dismiss}
              placeholder="The natural habitat of calories"
              keyboardType="numeric"
              />
          </View>
          </TouchableWithoutFeedback>

          <Text>{"\n"} </Text>
          <Text>{"\n"} </Text>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={{color: 'white'}}>Press Here</Text>
      </TouchableOpacity>
      <Text>{"\n"} </Text>
      </View>
        <Text>{"\n"} </Text>
          <Text>{"\n"} </Text>
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
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default FoodCalorieCounter;
