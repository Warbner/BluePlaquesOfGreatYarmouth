//  --- React and React Native --- \\
import React from 'react';
import {
    View,
    Pressable,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons'

// --- Own Components --- \\
import SubTitle from '../Common/subTitle'

// --- Own Assets --- \\
import { dropdownSheet } from './styles'
import colors from '../../Assets/colors'
const styles = dropdownSheet;

class SelectedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: new Animated.Value(0)
        };
        this.fadeIn = Animated.timing(this.state.value, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false
        })
        this.fadeOut = Animated.timing(this.state.value, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false
        })
        this.handleClose=this.handleClose.bind(this)
    }

    componentDidMount() {
        return this.fadeIn.start()
    }

    componentDidUpdate(prevProps) {
        if(this.props.visible != prevProps.visible) {
            return this.fadeOut.start(() => this.props.onPress())
        }
    }

    handleClose() {
        return this.fadeOut.start(() => this.props.onPress())
    }

    render() {
        return (
            <Animated.View style={[styles.selectCategory, {backgroundColor: colors.blue.light, marginLeft: 5}, {opacity: this.state.value}]}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', flexDirection: 'row',}}
                    onPress={this.handleClose}>
                <View style={{flex:5, justifyContent: 'center'}}>
                    <SubTitle style={{color: colors.white}}> {this.props.value} </SubTitle>
                </View>
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Icon name={"remove-circle-outline"} color={colors.white} size={26}/>
                </View>
            </TouchableOpacity>
            </Animated.View>
        )
    }
}

export default SelectedItem;