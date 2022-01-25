//  --- React and React Native --- \\
import React from 'react';
import {
    View,
} from 'react-native';

// --- Own Assets --- \\
import { commonSheet } from './styles'
const styles = commonSheet;

class Footer extends React.Component {

    render() {
        return (
            <View style={[styles.contentFoot, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

export default Footer;