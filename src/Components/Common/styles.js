import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../Assets/colors'

const { height, width } = Dimensions.get('window');

export const commonSheet = StyleSheet.create({
    parent: {
        flex: 1,
    },
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    pageContainer: {
        flex: 1,
    },
    header: {
        width: width,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        zIndex: 3,
        position: 'absolute',
        top: 0,
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column',
        position: 'absolute',
        width: width,
        bottom: 0

    },
    contentHead: {
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    contentMain: {
        flex:1,
        paddingTop: 10
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        borderWidth: 1,
        backgroundColor: colors.blue.veryLight,
        borderColor: colors.gray.light
    },
    contentText: {
        flex: 1,
        padding: 10,
        paddingTop: 0,
        paddingBottom: 5,
    },
    contentFoot: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        padding: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 22,
        textAlign: 'left',
        color: colors.gray.dark,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Black'
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'left',
        color: colors.gray.dark,
        paddingLeft: 1,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Black'
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'left',
        color: colors.gray.dark,
        marginBottom: 2,
        fontFamily: 'Roboto-Black'
    },

    logoContainer: {
        position: 'absolute',
        width: width,
    },

    logoImage: {
        height: 40,
        margin: 10,
        marginLeft: 0,
        marginRight: 0,
        width: undefined,
        resizeMode: 'contain',
    },

    noBottomPadding: {
        paddingBottom: 0
    }
    
});

export const buttonSheet = StyleSheet.create({
    button: {
        padding: 5,
        margin: 15,
        marginTop: 7.5,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        maxHeight:45,
        minHeight: 45,
        maxWidth: 45,
        minWidth: 45,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        elevation: 3,
    },

    functionlessButton: {
        padding: 5,
        margin: 5,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        backgroundColor: colors.white,
        maxHeight:45,
        minHeight: 45,
        maxWidth: 45,
        minWidth: 45,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        elevation: 3,
    },

    textButton: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 15,
        marginTop: 7.5,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        maxHeight: 45,
        minHeight: 45,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        flexDirection: 'row',
    },


    empty: {
        padding: 5,
        margin: 15,
        minHeight: 45,
        maxHeight: 45,
        minWidth: 45,
        maxWidth: 45,
        backgroundColor: 'transparent',
    },
    
})