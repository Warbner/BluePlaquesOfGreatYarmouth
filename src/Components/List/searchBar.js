//  --- React and React Native --- \\
import React from 'react';
import {
    View,
    TextInput,
} from 'react-native';

// --- Own Components --- \\
import CancelButton from '../Common/cancelButton'

// --- Own Assets --- \\
import { searchbarSheet } from './styles'
const styles = searchbarSheet;

// searchbar used on MapScreen to search for plaques
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // render
  render() {
    let cancelIcon = this.props.children
    if(this.props.value != '') {
      cancelIcon = (
        <CancelButton onPress={this.props.onPress}/>
      )
    }
    return (
        <View style={[styles.searchbar, this.props.style]}>
          <TextInput
            styles={styles.input}
            placeholder='Search here...'
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            onSubmitEditing={this.props.onSubmitEditing}
          />
          {cancelIcon}
        </View>
      );
    }
}

export default SearchBar;