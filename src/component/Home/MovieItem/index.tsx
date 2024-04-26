import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './MovieItem.styles';
import { Movie } from '../../../types';

type MovieItemProps = {
  movie: Movie;
  onPress: () => void;
};

const MovieItem: React.FC<MovieItemProps> = React.memo(({ movie, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}` }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
});

export default MovieItem;
