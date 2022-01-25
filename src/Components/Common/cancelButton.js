//  --- React and React Native --- \\
import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons'

// --- Own Assets --- \\
import colors from '../../Assets/colors'
import { searchbarSheet } from '../Map/styles'
const styles = searchbarSheet;

// CancelButton used in Search Bar component to reset the search input to ''
class CancelButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      return (
        <TouchableOpacity style={styles.cancelIcon} onPress={this.props.onPress}>
                <Icon name="close" color={colors.gray.dark} size={18}/>
        </TouchableOpacity> 
      )
    }
}

export default CancelButton;