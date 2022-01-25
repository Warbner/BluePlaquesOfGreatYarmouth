//  --- React and React Native --- \\
import React from 'react';
import {
    View,
} from 'react-native';

// --- Own Assets --- \\
import { buttonSheet } from './styles'
const styles = buttonSheet;

class EmptyButton extends React.Component {

    render() {
        return (
            <View style={styles.empty}/>
        );
    }
}

export default EmptyButton;