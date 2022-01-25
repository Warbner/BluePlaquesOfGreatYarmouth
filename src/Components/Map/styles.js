import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../Assets/colors'

const { height, width } = Dimensions.get('window');
export const mapScreenSheet = StyleSheet.create({
    map: {
        flex: 1,
    },
});

export const searchbarSheet = StyleSheet.create({
    searchbar: {
        maxWidth: 400,
        margin: 15,
        marginTop: 7.5,
        marginRight: 0,
        minHeight: 45,
        maxHeight: 45,
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderRadius: 50,
        borderColor: colors.gray.light,
        elevation: 1,
        flex: 5,
        paddingLeft: 5,
        paddingRight: 15,
    },
    input: {
        flex: 1,
    },
    cancelIcon: {
        margin: 'auto',
        minHeight: 45,
        maxHeight: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 5,

    },

    resultsContainer: {
        flex: 1,
        position: 'absolute',
        width: width,
        height: height,
        alignItems: 'center',
    },

    topPlacement: {
        top: 37, 
        flexDirection: 'row'
    },

    results: {
        flex: 5,
        marginLeft: 15,
        paddingTop: 10,
        maxWidth: 400,
        maxHeight: 150,
        zIndex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 0.5,
        backgroundColor: colors.white,
        borderColor: colors.gray.light,
    },

    resultsList: {
        padding: 5,
        paddingBottom: 0,
        maxWidth: 400,
        maxHeight: 150,
        minHeight: 10,
        zIndex: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: colors.white,
    },

    resultItem: {
        padding: 3,
        paddingLeft: 5,
        flexDirection: 'row',
    }


});

export const cardSheet = StyleSheet.create({
    overlay: {
        width: width,
        bottom: 0,
        alignItems: 'center'
    },

    cardView: {
        flex: 1,
        width: width,
        maxWidth: 500,
        minHeight: 150,
        maxHeight: 150,
        backgroundColor: colors.white,
        borderColor: colors.gray.light,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 5
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: 40,
        backgroundColor: colors.blue.veryLight,
        borderWidth: 0.5,
        borderColor: colors.gray.light
    },

    main: {
        flex:2,
        padding: 10,
        marginBottom: 5,
    },

    footer: {
        alignItems: 'flex-end',
        bottom: 0,
    },

    button: {
        flex: 1,
        padding: 5,
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        maxHeight: 45,
        minHeight: 45,
        minWidth: 45,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        flexDirection: 'row',
    },
});