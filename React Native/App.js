import 'react-native-gesture-handler';
import * as React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Profile from './screens/Profile';

import Food from './screens/food/FoodMenu';
import Recipe from './screens/food/Recipe';
import FoodCalorieCounter from './screens/food/FoodCalorieCounter';
import DietPlan from './screens/food/DietPlan';

import ExcersiseCalorieCounter from './screens/excersise/ExcersiseCalorieCounter';
import ExcersiseTypes from './screens/excersise/ExcersiseTypes';
import WorkoutPlan from './screens/excersise/WorkoutPlan';
import Excersise from './screens/excersise/ExcersiseMenu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home Page' }}
      />
    </Stack.Navigator>
  );
}

function ExcersiseStack() {
  return (
    <Stack.Navigator
      initialRouteName="Excersise"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Excersise"
        component={Excersise}
        options={{ title: 'Excersise Page' }}
      />
      <Stack.Screen
        name="ExcersiseTypes"
        component={ExcersiseTypes}
        options={{ title: 'ExcersiseTypes Page' }}
      />
      <Stack.Screen
        name="WorkoutPlan"
        component={WorkoutPlan}
        options={{ title: 'WorkoutPlan Page' }}
      />

      <Stack.Screen
        name="ExcersiseCalorieCounter"
        component={ExcersiseCalorieCounter}
        options={{ title: 'Excersise Calorie Counter Page' }}
      />
    </Stack.Navigator>
  );
}

function FoodStack() {
  return (
    <Stack.Navigator
      initialRouteName="Food"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Food"
        component={Food}
        options={{ title: 'Food Page' }}
      />

      <Stack.Screen
        name="Recipe"
        component={Recipe}
        options={{ title: 'Recipe Page' }}
      />

      <Stack.Screen
        name="FoodCalorieCounter"
        component={FoodCalorieCounter}
        options={{ title: 'Food Calorie Counter Page' }}
      />
      <Stack.Screen
        name="DietPlan"
        component={DietPlan}
        options={{ title: 'DietPlan Page' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile Page' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'red',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="FoodStack"
          component={FoodStack}
          options={{
            tabBarLabel: 'Food',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="food-apple"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ExcersiseStack"
          component={ExcersiseStack}
          options={{
            tabBarLabel: 'Excersise',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="arm-flex"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-list"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
