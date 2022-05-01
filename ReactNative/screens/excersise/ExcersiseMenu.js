// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';

const Excersise = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <ScrollView showsVerticalScrollIndicator={false}>
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
            Excersise screen
          </Text>
          
          <Text> {"\n"} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ExcersiseTypes')}>
            <Text style={{color:'white'}}>Excersise Types By Muscle</Text>
          </TouchableOpacity>
          
          <Text>{"\n"} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ExcersiseTypes')}>
            <Text style={{color:'white'}}>Excersise Types By Bodypart</Text>
          </TouchableOpacity>
          
          <Text>{"\n"} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ExcersiseTypes')}>
            <Text style={{color:'white'}}>All Excersise types</Text>
          </TouchableOpacity>
          <Text>{"\n"} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('WorkoutPlan')}>
            <Text style={{color:'white'}}>Get Fit!</Text>
          </TouchableOpacity>

          <Text>{"\n"} </Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ExcersiseCalorieCounter')}>
            <Text style={{color:'white'}}>Calories burnt</Text>
          </TouchableOpacity>
          
          <Text>{"\n"} </Text>

          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{color:'white'}}>Home</Text>
          </TouchableOpacity>
        </View>

      </View>
      </ScrollView>
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
    backbutton: {
    width: 100,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
});
export default Excersise;
