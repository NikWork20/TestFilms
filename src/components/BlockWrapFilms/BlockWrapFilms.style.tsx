import {StyleSheet} from 'react-native';

export const getStyle = () => {
  return StyleSheet.create({
    filmsContainer: {
      marginLeft: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    viewContainer: {
      alignItems: 'center',
      marginTop: 5,
      marginHorizontal: '2%',
    },
    rating: {
      backgroundColor: 'green',
      width: 27,
      height: 17,
      borderRadius: 14,
      zIndex: 1,
      borderColor: '#003a00',
      borderWidth: 1,
      marginRight: 8,
    },
    textRating: {
      textAlign: 'center',
      fontSize: 11,
      fontFamily: 'BenchNine-Bold',
      fontStyle: 'normal',
      color: 'black',
    },
    fastImg: {
      height: 164,
      borderRadius: 12,
      marginTop: -10,
      zIndex: 0,
    },
  });
};
