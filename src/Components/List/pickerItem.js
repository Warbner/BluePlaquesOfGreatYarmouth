//  --- React and React Native --- \\
import React from 'react';
import {
    View,
    Pressable,
    Text,
    TouchableOpacity
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons'

// --- Own Components --- \\
import SubTitle from '../Common/subTitle'

// --- Own Assets --- \\
import { dropdownSheet } from './styles'
import colors from '../../Assets/colors'
const styles = dropdownSheet;

class PickerItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={

        };
        this.onPress=this.onPress.bind(this)
    }

    onPress() {
        this.props.onPress()
    }

    render() {
        return (
            <TouchableOpacity style={[styles.categoryOption, {backgroundColor: this.props.backgroundColor}, this.props.style]}
                    onPress={this.onPress}>
                <View style={{flex:5, justifyContent: 'center'}}>
                    <SubTitle style={{color: this.props.color }}> {this.props.value} </SubTitle>
                </View>
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Icon name={this.props.icon} color={this.props.color} size={26}/>
                </View>
            </TouchableOpacity>
        )
    }
}

export default PickerItem;