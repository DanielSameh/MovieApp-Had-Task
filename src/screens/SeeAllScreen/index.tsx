import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  View
} from "react-native";
import { fetchMovies } from "../../api";
import MovieItem from "../../component/Home/MovieItem";
import { Movie } from "../../types";
import style from "./SeeAllScreen.styles";

const SeeAllScreen: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
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
      setMovies((prev) => [...prev, ...newMovies.results]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <View style={style.container}>
        <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View style={style.itemContainer}>
            <MovieItem
              movie={item}
              onPress={() => {}}
            />
          </View>
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        numColumns={2}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
    </View>
  );
};


export default SeeAllScreen;
