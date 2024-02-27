import {StyleSheet} from 'react-native';
import {getFontFamity} from '../fonts/helper';

const globalStyles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {padding: 14, borderRadius: 100, backgroundColor: '#f9fab'},
  messageNumberContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F35BAC',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    borderRadius: 10,
    padding: 2,
    width: 10,
    height: 10,
    top: 10,
  },
  messageNumber: {
    color: '#fff',
    fontSize: 6,
    fontFamily: getFontFamity('Inter', '600'),
  },
  userContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});

export default globalStyles;
