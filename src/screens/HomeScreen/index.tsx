import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { fetchGenres, fetchMovies } from "../../api";
import MainMovie from "../../component/Home/MainMovie";
import MovieItem from "../../component/Home/MovieItem";
import { Genre, GenresLookup, Movie } from "../../types";
import style from "./HomeScreen.styles";

const HomeScreen: React.FC = () => {
  const [mainMovie, setMainMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<GenresLookup>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const moviesData = await fetchMovies();
        const genresData = await fetchGenres();
        const genresLookup: GenresLookup = genresData.genres.reduce(
          (acc: GenresLookup, genre: Genre) => {
            acc[genre.id] = genre.name;
            return acc;
          },
          {}
        );
        setMainMovie(moviesData.results[0]);
        setMovies(moviesData.results.slice(1));
        setGenres(genresLookup);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handlePress = () => {
    // logic
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={style.container}>
      {mainMovie ? <MainMovie movie={mainMovie} genres={genres} /> : null}
      <View style={style.row}>
        <Text style={style.title}>Premieres</Text>
        <Text style={style.seeAll}>See All</Text>
      </View>
      <FlatList
        data={movies}
        horizontal
        renderItem={({ item }) => (
          <MovieItem movie={item} onPress={handlePress} />
        )}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
      />
    </View>
  );
};

export default HomeScreen;
