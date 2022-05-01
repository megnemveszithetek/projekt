import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import GetStarted from './screens/GetStarted';
import Food from './screens/food/FoodMenu';
import Recipe from './screens/food/Recipe';
import FoodCalorieCounter from './screens/food/FoodCalorieCounter';
import DietPlan from './screens/food/DietPlan';

import ExcersiseCalorieCounter from './screens/excersise/ExcersiseCalorieCounter';
import ExcersiseTypes from './screens/excersise/ExcersiseTypes';
import WorkoutPlan from './screens/excersise/WorkoutPlan';
import Excersise from './screens/excersise/ExcersiseMenu';
import ExcersiseByBodyPart from './screens/excersise/Excersise_By_BodyPart';
import ExcersiseByMuscle from './screens/excersise/Excersise_By_Muscle';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GetStarted" component={GetStarted} />

        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen
          name="FoodCalorieCounter"
          component={FoodCalorieCounter}
        />
        <Stack.Screen name="DietPlan" component={DietPlan} />

        <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
        <Stack.Screen
          name="ExcersiseCalorieCounter"
          component={ExcersiseCalorieCounter}
        />
        <Stack.Screen name="ExcersiseTypes" component={ExcersiseTypes} />
        <Stack.Screen name="Excersise" component={Excersise} />
        <Stack.Screen
          name="ExcersiseByBodyPart"
          component={ExcersiseByBodyPart}
        />
        <Stack.Screen name="ExcersiseByMuscle" component={ExcersiseByMuscle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
