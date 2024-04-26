import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchMovies } from '../../api';

const SeeAllScreen: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
  }, [page]);

  const loadMovies = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const newMovies = await fetchMovies(page);
      setMovies(prev => [...prev, ...newMovies.results]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={movies}
        // render items just like in HomeScreen, possibly using the same component
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator />
        }
      /> */}
    </View>
  );
};

// Add styles as per your design for SeeAllScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Add more styles according to the design
});

export default SeeAllScreen;
