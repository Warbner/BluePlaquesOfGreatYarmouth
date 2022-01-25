//  --- React and React Native --- \\
import React from 'react';
import {
    Pressable,
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons';

// --- Own Assets --- \\
import { buttonSheet } from './styles'
import colors from '../../Assets/colors'
const styles = buttonSheet;

class Button extends React.Component {

    render() {
        return (
            <Pressable style={({ pressed }) => [
                styles.button,
                this.props.style,
                {
                    backgroundColor: pressed
                        ? colors.blue.veryLight
                        : colors.blue.light,
                }
            ]}
                onPress={this.props.onPress}>
                <Icon name={this.props.icon} color={colors.white} size={26}/>
            </Pressable>
        );
    }
}

export default Button;