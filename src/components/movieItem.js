import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {IMAGE_URL} from '../constants';

const MovieItem = ({movie, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image source={{uri: IMAGE_URL + movie.poster_path}} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text>Release: {movie.release_date}</Text>
      <Text>Rating: {movie.vote_average}</Text>
    </View>
  </TouchableOpacity>
);

export default MovieItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
