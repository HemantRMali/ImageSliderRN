import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const sliderResponse = require('../../sliderResponse/slider.json');
import SliderItem from '../../components/sliderItem';
import styles from './styles';
const Home = ({params}) => (
  <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>
      <Carousel
        data={sliderResponse}
        renderItem={SliderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
  </SafeAreaView>
);

export default Home;
