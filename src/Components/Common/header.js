//  --- React and React Native --- \\
import React from 'react';
import {
    View,
} from 'react-native';

// --- Own Assets --- \\
import { commonSheet } from './styles'
const styles = commonSheet;

class Header extends React.Component {

    render() {
        return (
            <View style={[styles.contentHead, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

export default Header;