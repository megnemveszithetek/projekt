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

const Food = ({ route, navigation }) => {
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
            Food screen
          </Text>

          <Text>{'\n'} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DietPlan')}>
            <Text style={{ color: 'white' }}>Go to Diet Plans</Text>
          </TouchableOpacity>

          <Text>{'\n'} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Recipe')}>
            <Text style={{ color: 'white' }}>Get recipes!</Text>
          </TouchableOpacity>
          
          <Text>{'\n'} </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FoodCalorieCounter')}>
            <Text style={{ color: 'white' }}>Add your food's calorie!</Text>
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
export default Food;
