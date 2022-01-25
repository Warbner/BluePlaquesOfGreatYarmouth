//  --- React and React Native --- \\
import React from 'react';
import {
    Pressable,
    View
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons';

// --- Own Components --- \\
import SubTitle from '../Common/subTitle';

// --- Own Assets --- \\
import { listScreenSheet } from './styles'
import colors from '../../Assets/colors'
const styles = listScreenSheet;

class MapButton extends React.Component {

    render() {
        return (
            <View>
                <Pressable style={styles.mapButton}
                    onPress={this.props.onPress}
                >
                    <View style={styles.bubbleCount}><SubTitle style={{fontSize: 15, color: colors.blue.standard}}> {this.props.value} </SubTitle></View>
                    <SubTitle style={{color: colors.white}}> View on Map </SubTitle>
                    <Icon name={"location-outline"} color={colors.white} size={26}/>
                </Pressable>
            </View>
            
        );
    }
}

export default MapButton;