import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigation } from './bottomTab';
import MovieDetails from '../screens/MovieDetails/MovieDetails';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen options={{
            headerBackTitle: null
        }} name="Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
