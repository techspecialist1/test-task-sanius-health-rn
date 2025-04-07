import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieList from '../screens/MovieList/MovieList';
import {Image} from 'react-native';
import {NOW_PLAYING_BOTTOM_ICON, POPULAR_BOTTOM_ICON, TOP_RATED_BOTTOM_ICON, UPCOMING_BOTTOM_ICON} from '../constants';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Now Playing"
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 20, width: 20}}
              source={{uri: NOW_PLAYING_BOTTOM_ICON}}
            />
          ),
        }}
        children={() => <MovieList category="now_playing" />}
      />
      <Tab.Screen
        name="Popular"
        options={{
          tabBarIcon: () => (
            <Image style={{height: 20, width: 20}} source={{uri: POPULAR_BOTTOM_ICON}} />
          ),
        }}
        children={() => <MovieList category="popular" />}
      />
      <Tab.Screen
        name="Top Rated"
        options={{
          tabBarIcon: () => (
            <Image style={{height: 20, width: 20}} source={{uri: TOP_RATED_BOTTOM_ICON}} />
          ),
        }}
        children={() => <MovieList category="top_rated" />}
      />
      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarIcon: () => (
            <Image style={{height: 20, width: 20}} source={{uri: UPCOMING_BOTTOM_ICON}} />
          ),
        }}
        children={() => <MovieList category="upcoming" />}
      />
    </Tab.Navigator>
  );
};
