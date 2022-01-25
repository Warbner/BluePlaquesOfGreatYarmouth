//  --- React and React Native --- \\
import React from 'react';
import {
    View,
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons';

// --- Own Assets --- \\
import { buttonSheet } from './styles'
import colors from '../../Assets/colors'
const styles = buttonSheet;

class FunctionlessButton extends React.Component {

    render() {
        return (
            <View style={[
                styles.functionlessButton,
                this.props.style
            ]}>
                <Icon name={this.props.icon} color={colors.blue.standard} size={26}/>
            </View>
        );
    }
}

export default FunctionlessButton;