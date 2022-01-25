import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../Assets/colors'

const { height, width } = Dimensions.get('window');

export const homeScreenSheet = StyleSheet.create({
  bookImage: {
    width: 100,
    height: 150,
    resizeMode:'cover',
    borderRadius: 10,
    marginRight: 10
  }
});

  
export const aboutScreenSheet = StyleSheet.create({
      bannerImage: {
        width: 350,
        height: 200,
        resizeMode:'cover',
        borderRadius: 10,  
        marginTop: 10,
      },
      bannerContainer: {
        flex: 1,
        alignItems: 'center'
      },
      navButtonContainer: {
        flexDirection: 'row'
      },
      navButton: {
        flex: 1,
        margin: 5
      }
});

 
export const detailScreenSheet = StyleSheet.create({
  closeLocationContainer: {
      marginBottom: 5,
  },

  closeLocationItem: {
      flex: 1,
      paddingLeft: 15,
  },

  closeLocationSeperator: {
      height: 1,
      backgroundColor: colors.gray.light,
  },

  buttonContainer: {
      flexDirection: 'row',
      paddingRight: 5,
      paddingBottom: 5,
  },

  mapButton: {
    margin: 0,
    width: width-20
  }
});