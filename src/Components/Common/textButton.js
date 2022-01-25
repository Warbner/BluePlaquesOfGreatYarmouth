//  --- React and React Native --- \\
import React from 'react';
import {
    Pressable,
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons';

// --- Own Components --- \\
import SubTitle from '../Common/subTitle'

// --- Own Assets --- \\
import { buttonSheet } from './styles'
import colors from '../../Assets/colors'
const styles = buttonSheet;

class TextButton extends React.Component {

    render() {
        return (
            <Pressable style={({ pressed }) => [
                styles.textButton,
                {
                    backgroundColor: pressed
                        ? colors.blue.veryLight
                        : colors.blue.light,
                },
                this.props.style,
                ]}
                onPress={this.props.onPress}
            >
                <SubTitle style={{color: this.props.color}}>{this.props.children}</SubTitle>
                <Icon style={{marginLeft: 5}} name={this.props.icon} color={this.props.color} size={26}/>
            </Pressable>
        );
    }
}

export default TextButton;