import React from 'react';
import {Text, ImageBackground} from 'react-native';
import styles from './styles';
import {imageBaseUrl} from '../../constants';
const SliderItem = ({item}) => {
  return (
    <ImageBackground
      source={{uri: `${imageBaseUrl}${item.id}`}}
      style={styles.imgBackground}>
      <Text style={styles.author}>{item.author}</Text>
    </ImageBackground>
  );
};

export default SliderItem;
