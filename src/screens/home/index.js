import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderItem from '../../components/sliderItem';
import styles from './styles';
import {connect} from 'react-redux';
import {fetchHomeData} from './actions';
import {shuffle} from '../../methods';

const Home = (props) => {
  useEffect(() => {
    console.log('props:', props);
    props.fetchHomeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Carousel
          data={shuffle(props.photos)}
          renderItem={SliderItem}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>
    </SafeAreaView>
  );
};

/**
 * State to Props
 * @param {*} param
 */
const mapStateToProps = (state) => {
  return {
    ...state.HomeReducer,
  };
};

/**
 * Dispatch to Props
 */
const mapDispatchToProps = {
  fetchHomeData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
