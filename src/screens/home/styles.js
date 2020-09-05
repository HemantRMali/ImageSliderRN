import {StyleSheet} from 'react-native';
import {colors} from '../../constants';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  safeAreaView: {flex: 1, backgroundColor: colors.rebeccaPurple},
});
