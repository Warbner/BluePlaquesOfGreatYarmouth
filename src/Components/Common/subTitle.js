//  --- React and React Native --- \\
import React from 'react';
import {
    Text,
} from 'react-native';

// --- Own Assets --- \\
import { commonSheet } from './styles'
const styles = commonSheet;

class SubTitle extends React.Component {

    render() {
        return (
            <Text style={[styles.subTitle, this.props.style]} 
                numberOfLines={this.props.numberOfLines} 
                ellipsizeMode={this.props.ellipsizeMode}>
                {this.props.children}
            </Text>
        );
    }
}

export default SubTitle;