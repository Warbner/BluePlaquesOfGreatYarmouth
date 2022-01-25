//  --- React and React Native --- \\
import React from 'react';
import {
    View,
} from 'react-native';

// --- Own Assets --- \\
import { commonSheet } from './styles'
const styles = commonSheet;

class Content extends React.Component {

    render() {
        return (
            <View style={[styles.contentMain, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

export default Content;