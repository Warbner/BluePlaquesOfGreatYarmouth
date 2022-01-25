import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../Assets/colors'

const { height, width } = Dimensions.get('window');

export const listScreenSheet = StyleSheet.create({
    itemContainer:{
        flex:1,
        minHeight: 60,
        maxHeight: 60,
        width: width+50,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    seperator: {
        width: width+50,
        height: 2,
        backgroundColor: colors.gray.light,
    },

    contentMain: {
        flex:16,
        marginTop: 10,
    },
    
    selectIcon: {
        width: 50, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    navButton: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
    },

    touchable: ({ pressed }) => [{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: pressed
                        ? 0.4
                        : 1,
        padding: 5
    }],

    mapButton: ({ pressed }) => [{
        padding: 5,
        margin: 15,
        borderRadius: 50,
        borderWidth: 0.5,
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        backgroundColor: pressed
                        ? colors.blue.veryLight
                        : colors.blue.light,
        maxHeight:45,
        minHeight: 45,
        minWidth: 45,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        elevation: 5,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4
    }],

    bubbleCount: {
        minHeight: 25,
        maxHeight: 25,
        minWidth:25,
        maxWidth: 25,
        borderRadius: 30,
        backgroundColor: colors.white,
        borderColor: colors.black,
        borderWidth: 0.5,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: -13,
        right: -5
    }
});


export const dropdownSheet = StyleSheet.create({
    dropdown: {
        width: width,
        flex: 1,
        minHeight: 300,
        maxHeight: 600,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: colors.gray.veryLight,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        zIndex: 3
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
    },

    header: {
        justifyContent: 'center', 
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        marginBottom: 5,
        maxHeight: 50,
        minHeight: 50,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        backgroundColor: colors.gray.veryLight
    },

    clearButton: ({ pressed }) => [{
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: pressed
                        ? colors.blue.veryLight
                        : colors.blue.light,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 5,
        position: 'absolute',
        right: 10,
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: colors.gray.light
    }],

    content: {
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1
    },

    dropdownList: {
        flex: 1,
        marginBottom: 5,
    },

    button: ({ pressed }) => [{
        borderColor: colors.gray.light,
        backgroundColor: pressed
                        ? colors.blue.light
                        : colors.blue.standard,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }],

    selectCategory: {
        height: 40,
        padding: 5,
        paddingLeft: 15,
        backgroundColor: colors.gray.veryLight,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        elevation: 1,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },

    categoryOption: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 15,
        backgroundColor: colors.gray.veryLight,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        elevation: 1,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },

    selectedList: {
        height: 50,
        width: width
    },

    selected: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 15,
        margin: 5,
        backgroundColor: colors.blue.standard,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: colors.gray.light,
        elevation: 1,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    }
});

export const searchbarSheet = StyleSheet.create({
    searchbar: {
        maxWidth: 400,
        margin: 10,
        marginTop: 0,
        marginRight: 0,
        minHeight: 45,
        maxHeight: 45,
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderRadius: 15,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
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
