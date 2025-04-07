import React, {useState, createContext} from 'react';
import {Navigation} from './src/navigation';
import { SafeAreaView } from 'react-native';
const FavoritesContext = createContext();
const App = () => {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = movie => {
    setFavorites(prev => {
      const exists = prev.some(m => m.id === movie.id);
      return exists ? prev.filter(m => m.id !== movie.id) : [...prev, movie];
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
    <FavoritesContext.Provider value={{favorites, toggleFavorite}}>
      <Navigation />
    </FavoritesContext.Provider>
    </SafeAreaView>
  );
};
export default App;