import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { IMAGE_URL } from '../../constants';

const MovieDetails = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={{ uri: IMAGE_URL + movie.poster_path }} style={styles.image} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.titleText}>{movie.title}</Text>
        <Text><Text style={styles.relaseText}>Release:</Text> {movie.release_date}</Text>
        <Text><Text style={styles.relaseText}>Rating:</Text> {movie.vote_average}</Text>
        <Text style={{ marginTop: 10 }}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
}

export default MovieDetails

