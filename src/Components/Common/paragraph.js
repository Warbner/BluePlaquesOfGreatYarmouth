//  --- React and React Native --- \\
import React from 'react';
import {
    Text,
} from 'react-native';

// --- Own Assets --- \\
import { commonSheet } from './styles'
const styles = commonSheet;

class Paragraph extends React.Component {

    render() {
        return (
            <Text style={[styles.paragraph, this.props.style]} 
                numberOfLines={this.props.numberOfLines}
                ellipsizeMode={this.props.ellipsizeMode}>
                {this.props.children}
            </Text>
        );
    }
}

export default Paragraph;