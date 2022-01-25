//  --- React and React Native --- \\
// --- Third Party --- \\
// --- Own Components --- \\
// --- Own Assets --- \\
import React from 'react';
import {
  View,
  Pressable,
  Modal,
  Animated,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import SubTitle from '../Common/subTitle'
import Title from '../Common/title'
import MultiplePicker from '../List/multiplePicker'

import { dropdownSheet } from '../List/styles'
import colors from '../../Assets/colors'
import TextButton from '../Common/textButton';
import { Searchbar } from 'react-native-paper';

const styles = dropdownSheet
const Categories = [ {id: 'artists', value: 'Artists'}, {id: 'entertainment', value: 'Entertainment'},
  {id: 'events', value: 'Events'}, {id: 'fishing', value: 'Fishing'}, {id: 'inventors', value: 'Inventors'},
  {id: 'medical', value: 'Medical'}, {id: 'military', value: 'Military'}, {id: 'nelson', value: 'Nelson'}, 
  {id: 'novelists', value: 'Novelists'}, {id: 'people',value: 'People'}, {id: 'places', value: 'Places'},
  {id: 'religious', value: 'Religious'}, { id: 'sporting', value: 'Sporting'} ];


class DropdownModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          value: new Animated.Value(300),
          search: ''
        };

        this.openModal = Animated.timing(this.state.value, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        })
    
        this.closeModal = Animated.timing(this.state.value, {
          toValue: 600,
          duration: 200,
          useNativeDriver: false
        })

      this.handleClose=this.handleClose.bind(this)
        
      this.onRemoveText=this.onRemoveText.bind(this)
      this.onChangeText=this.onChangeText.bind(this)
    }

    componentDidMount() {
      if(this.props.visible == true) {
        return this.openModal.start()
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if(prevProps.visible != this.props.visible && this.props.visible == true) {
        return this.openModal.start()
      }
    }

    onRemoveText() {
      this.setState({search: '',
      submittedSearch: ''})
    }
  
    onChangeText(search) {
      this.setState({search})
    }
  
    handleClose() {
      return this.closeModal.start(() => this.props.onPress())
    }

    render() {
      const top = this.state.value.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });
      let clearButton = this.props.children
      if(this.props.selectedItems.length > 0) {
        clearButton = (
          <Pressable style={styles.clearButton}
            onPress={this.props.onClear}>
            <SubTitle style={{color: colors.white}}> Clear </SubTitle>
            <Icon name="trash-outline" color={colors.white} size={26}/>
          </Pressable>
        )
      }
        return (
            <Modal
                animationType='fade'
                transparent 
                visible={this.props.visible}
                onRequestClose={() => this.handleClose()}
            >
              <View style={styles.container}>
                <TouchableOpacity onPress={this.handleClose} style={{flex: 1}}/>
                <Animated.View style={[styles.dropdown, {top}]}>
                  <View style={styles.header}>
                    <Title>{this.props.selectedItems.length} Selected</Title>
                    { clearButton }
                  </View>
                  <View style={styles.content}>
                  <Searchbar
                      style={{marginBottom: 5}}
                      onSubmitEditing={this.onSubmitSearch}
                      onChangeText={this.onChangeText}
                      value={this.state.search}
                      onPress={this.onRemoveText}/>
                    <MultiplePicker
                        selectedItems={this.props.selectedItems}
                        onSelectionsChange={this.props.onSelectionsChange}
                        data={Categories}
                        search={this.state.search}
                    />
                    <TextButton
                        style={styles.button}
                        onPress={this.handleClose}
                        color={colors.white}
                    >
                      Done
                    </TextButton>
                  </View>
                    
                </Animated.View>
              </View>  
          </Modal>  
        );
    }
}

export default DropdownModal;