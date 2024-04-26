import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./MainMovie.styles";
import { getGenreNames } from "../../../utils";
import { Movie, GenresLookup } from "../../../types";

type MainMovieProps = {
  movie: Movie;
  genres: GenresLookup;
};

const MainMovie: React.FC<MainMovieProps> = ({ movie, genres }) => {
  const genreNames = getGenreNames(movie.genre_ids, genres);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
        style={styles.image}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.row}>
            <Text style={styles.descriptionText}>
              {movie.release_date.split("-")[0]} .{" "}
            </Text>
            <Text style={styles.descriptionText}>{genreNames}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default MainMovie;
