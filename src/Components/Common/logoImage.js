//  --- React and React Native --- \\
import React from 'react';
import {
    Image,
    View
} from 'react-native';

// --- Own Assets --- \\
import Logo from '../../Assets/Images/logo.gif'
import { commonSheet } from '../Common/styles'
const styles = commonSheet;

class LogoImage extends React.Component {

    render() {
        return (
            <View style={styles.logoContainer}>
                <Image
                style={styles.logoImage}
                source={Logo}
            />
            </View>
            
        );
    }
}

export default LogoImage;