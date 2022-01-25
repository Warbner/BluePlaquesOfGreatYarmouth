//  --- React and React Native --- \\
import React from 'react';
import {
    Switch,
    View,
    Text
} from 'react-native';

// --- Own Assets --- \\
import colors from '../../Assets/colors'
import { commonSheet } from './styles'
const styles = commonSheet

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isEnabled: false
        };

        this.toggleSwitch=this.toggleSwitch.bind(this);

    }

    toggleSwitch() {
        this.setState({isEnabled: !this.state.isEnabled})
    }

    render() {
        return (
            <View>
                <Text> {this.props.children} </Text>
                <Switch
                    trackColor={{ false: colors.gray.light, true: colors.gray.standard }}
                    thumbColor={this.state.isEnabled ?  colors.white : colors.blue.standard}
                    onValueChange={this.toggleSwitch}
                    value={this.state.isEnabled}
                />
            </View>
        );
    }
}

export default Toggle;