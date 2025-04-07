import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {API_KEY, BASE_URL} from '../../constants';
import MovieItem from '../../components/movieItem';
import {useNavigation} from '@react-navigation/native';

const MovieList = ({category}) => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${page}`,
      );
      const data = await res.json();
      console.log('data =>> ', data);

      if (data) {
        setMovies(prev => [...prev, ...data.results]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const loadMore = () => setPage(prev => prev + 1);

  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <MovieItem
          movie={item}
          onPress={() => navigation.navigate('Details', {movie: item})}
        />
      )}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
};

export default MovieList;
