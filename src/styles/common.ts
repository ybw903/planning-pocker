import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: {
          width: 8,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
