//  --- React and React Native --- \\
import React from 'react';
import {
    View,
    Animated
} from 'react-native';

// --- Own Assets --- \\
import { commonSheet } from './styles'
const styles = commonSheet;

class FooterAbsolute extends React.Component {

    render() {
        return (
            <View style={[styles.footer, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

export default FooterAbsolute;