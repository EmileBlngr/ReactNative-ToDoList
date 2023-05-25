import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  primaryBgColor: {
    backgroundColor: '#ffd888',
  },
  secondaryBgColor: {
    backgroundColor: '#55482d',
  },
  thirdBgColor: {
    backgroundColor: '#968664',
  },

  title1: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffd888',
  },
  subtitle1: {
    fontSize: 20,
    color: 'black',
  },
  ShadowLg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  ShadowMd: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
