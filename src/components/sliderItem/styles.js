import {StyleSheet} from 'react-native';
import {colors} from '../../constants';
export default StyleSheet.create({
  imgBackground: {
    backgroundColor: colors.floralWhite,
    borderRadius: 10,
    width: 300,
    aspectRatio: 1.5, // 300/1.5 = 200 height
    marginHorizontal: 25,
  },
  author: {fontSize: 30, marginHorizontal: 10, color: colors.floralWhite},
  imageStyle: {borderRadius: 10},
});
