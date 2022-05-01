// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import ExcersiseExample from '../images/ExcersiseExample'
import FoodPic from '../images/FoodPic'
const GetStarted = ({  navigation }) => {
  return (

      <View style={{ flex: 1, padding: 16 }}>
 
          <Card>
            <Card.Title>Excersise</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  ExcersiseExample,
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              In this application you can:  {'\n'}
              - Count your burnt calories {'\n'}
              - Get workout plans  {'\n'}
            </Text>
            
          </Card>

          <Card>
            <Card.Title>Food</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  FoodPic,
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              In this application you can:  {'\n'}
              - Count your food's calorie {'\n'}
              - Try diets
            </Text>
            
          </Card>

          <Text>{'\n'} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{ color: 'white' }}>Home</Text>
          </TouchableOpacity>
        
      </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
export default GetStarted;
