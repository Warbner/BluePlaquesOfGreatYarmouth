//  --- React and React Native --- \\
import React from 'react';
import {
    View,
    TouchableOpacity,
    Pressable,
    Animated
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons'

// --- Own Components --- \\
import Title from '../Common/title'
import SubTitle from '../Common/subTitle';

// --- Own Assets --- \\
import { listScreenSheet } from './styles'
import colors from '../../Assets/colors'
const listStyles = listScreenSheet

class ListElement extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={
            selectOption: false,
        };
            this.onPress=this.onPress.bind(this)
    }

    componentDidMount() {
        if(this.props.selectOption == true) {
            this.setState({selectOption: this.props.selectOption})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.selectOption != prevProps.selectOption && this.props.selectOption != this.state.selectOption) {
            this.setState({selectOption: this.props.selectOption})
        }
    }

    onPress() {
        if(this.state.selectOption) {
            this.props.handleSelect()
        }
        else {
            this.props.goToDetails()
        }
    }

    render() {
        return (
            <Animated.View style={[listStyles.itemContainer, {backgroundColor:this.props.backgroundColor}]}>
                <Pressable style={listStyles.touchable} 
                    onPress={this.onPress} 
                    onLongPress={this.props.toggleSelectOption}
                    delayLongPress={400}>
                    <View style={listStyles.selectIcon}>
                        <Icon name={this.props.icon} color={colors.blue.standard} size={26}/>
                    </View>
                    <View style={listStyles.navButton}>
                        <View style={{flex:9, justifyContent: 'center'}}>
                            <Title  numberOfLines={1} ellipsizeMode='tail'>{this.props.title}</Title>
                            <SubTitle style={{color: colors.blue.light}} numberOfLines={1} ellipsizeMode='tail'>{this.props.location}</SubTitle>
                        </View>
                        <View style={{flex:1, justifyContent: 'center'}}>
                            <Icon name="chevron-forward" color={colors.blue.standard} size={26}/>
                        </View>
                    </View>
                </Pressable>
            </Animated.View>
        );
    }
}

export default ListElement;