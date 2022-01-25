//  --- React and React Native --- \\
import React from 'react';
import {
  View,
  FlatList,
  Animated,
  Dimensions
} from 'react-native';

// --- Own Components --- \\
import Page from '../Components/Common/page'
import Header from '../Components/Common/header'
import Content from '../Components/Common/content'
import LogoImage from '../Components/Common/logoImage'
import ListElement from '../Components/List/listElement'
import DropdownModal from '../Components/List/dropdownModal'
import SelectedItem from '../Components/List/selectedItem';
import SearchBar from '../Components/List/searchBar';
import FooterAbsolute from '../Components/Common/footerAbsolute';
import MapButton from '../Components/List/mapButton';
import TextButton from '../Components/Common/textButton';
import Button from '../Components/Common/button';

// --- Own Assets --- \\
import { FeatureCollection } from '../Assets/objects'
import { commonSheet } from '../Components/Common/styles'
import { listScreenSheet, dropdownSheet } from '../Components/List/styles'
import colors from '../Assets/colors'

const styles = commonSheet;
const listStyles = listScreenSheet
const dropdownStyles = dropdownSheet

const { width } = Dimensions.get('screen')
class ListScreen extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      list: FeatureCollection.features,
      filteredList: FeatureCollection.features,
      selectedItems: [],
      categoryFilter: [],
      modalVisible: false,
      selectOption: false,

      search: '',

      loaded: false,
      value: new Animated.Value(50)
  };
  this.slideIn = Animated.timing(this.state.value, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    })

    this.slideOut = Animated.timing(this.state.value, {
      toValue: 50,
      duration: 100,
      useNativeDriver: true
    })

    this.openDropdown=this.openDropdown.bind(this)
    this.closeDropdown=this.closeDropdown.bind(this)
    this.resetCategoryFilter=this.resetCategoryFilter.bind(this)
    this.resetSelectedItems=this.resetSelectedItems.bind(this)
    this.toggleSelectOption=this.toggleSelectOption.bind(this)
    
    
    this.onRemoveText=this.onRemoveText.bind(this)
    this.onChangeText=this.onChangeText.bind(this)
}
  componentDidMount() {
    this.setState({loaded: true})
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.selectOption != prevState.selectOption) {
      if(this.state.selectOption == true) {
        return this.slideIn.start()
      }
      else {
        this.resetSelectedItems()
        return this.slideOut.start()
      }
    }
  }

  goToMap() {
    const { selectedItems } = this.state
    let searchValue = ''
    for(let i = 0; selectedItems.length > i ; i++) {
          if(i == selectedItems.length-1) {
            searchValue = searchValue + selectedItems[i].properties.title
          }
          else {
            searchValue = searchValue + selectedItems[i].properties.title + '--'
          }
    }
    this.props.navigation.navigate(
      'Map', {query: searchValue}
    )
  }

  openDropdown() {
      this.setState({modalVisible: true})
  }

  closeDropdown() {
    this.setState({modalVisible: false})
  }

  onSelectionsChange = (categoryFilter) => {
    this.setState({categoryFilter})
  }

  resetSelectedItems() {
    this.setState({selectedItems: []})
  }

  resetCategoryFilter() {
    this.setState({categoryFilter: []})
  }

  toggleSelectOption() {
    this.setState({selectOption: !this.state.selectOption})
  }

  handleSelect(item) {
      let { selectedItems } = this.state
      const selected = selectedItems.findIndex((i) => i.id == item.id) > -1
      if((selected == true)) {
          selectedItems = selectedItems.filter((i) => i.id !== item.id)
      }
      else {
          selectedItems = selectedItems.concat(item)
      }
      this.setState({selectedItems: selectedItems})
  }

  onRemoveText() {
    this.setState({search: '',
    submittedSearch: ''})
  }

  onChangeText(search) {
    this.setState({search})
  }

  renderItem = ({ item }) => {
    const selected = this.state.selectedItems.findIndex((i) => i.id == item.id) > -1
      return (
        <ListElement 
          title={item.properties.title}
          location={item.properties.location}
          goToDetails={() => this.props.navigation.push('Details', {
              object: item,
              path: 'List'
            })
          }
          backgroundColor={selected? colors.blue.veryLight : colors.white}
          selectOption={this.state.selectOption}
          toggleSelectOption={() => this.toggleSelectOption()}
          icon={selected? "radio-button-on-outline" : "radio-button-off-outline"}
          handleSelect={() => this.handleSelect(item)}
          emptyList={() => this.resetSelectedItems()}
        />
      )
  }

  renderSeperator() {
    return (
      <View style={listStyles.seperator}/>
    )
  }

  renderSelected = ({ item }) => {
      return (
        <SelectedItem
          value={item.value}
          onPress={() => this.setState({categoryFilter: this.state.categoryFilter.filter((i) => i.id != item.id)})}
        />
      )
  }

  render() {
    let filteredList = this.state.list
    if(this.state.categoryFilter.length > 0) {
      filteredList = this.state.list.filter((item) => {

          for(let i = 0; i < this.state.categoryFilter.length; i++) {
            if(item.properties.category.toLowerCase().includes(this.state.categoryFilter[i].id)) {
              return true
            }
          }
      })
    }
    if(this.state.search.length > 0) {
      filteredList = filteredList.filter((item) => {
            if(item.properties.title.toLowerCase().includes(this.state.search.toLowerCase())) {
              return true
            }
      })
    }
    filteredList.sort((a, b) => {
      if(a.title == b.title) {
        return 0
      }
      if(a.title > b.title) {
        return -1
      }
      if(a.title < b.title) {
        return 1
      }
    })

    let filter = this.props.children
    if(this.state.categoryFilter.length > 0) {
      filter = (
        <View style={{padding: 5}}>
          <FlatList
              horizontal
              style={{maxHeight: 45}}
              data={this.state.categoryFilter}
              renderItem={this.renderSelected}
              showsHorizontalScrollIndicator={false}
              extraData={this.state}
            />
        </View>
      )
    }

    let goToMap = this.props.children
    if(this.state.selectedItems.length > 0) {
      goToMap = (
        <MapButton
          onPress={() => this.goToMap()}
          value={this.state.selectedItems.length}/>
      )
    }
    return(
      <Page>
        <Header>
          <View style={{flex:6}}/>
          <LogoImage/>
          <TextButton style={{width: 80}} 
            onPress={this.toggleSelectOption}
            color={colors.white}
            >{this.state.selectOption? "Cancel" : "Select"}</TextButton>
        </Header>
        <Content style={{padding: 0}}>
          <View style={{flex: 4}}>
            <View style={{flexDirection: 'row'}}>
              <SearchBar
                onSubmitEditing={this.onSubmitSearch}
                onChangeText={this.onChangeText}
                value={this.state.search}
                onPress={this.onRemoveText}
              />
              <TextButton
                style={{marginTop: 0, marginLeft: 0, marginBottom: 5,
                  borderTopLeftRadius: 0, borderBottomLeftRadius: 0,}}
                  onPress={this.openDropdown}
                  color={colors.white}
                  icon='funnel-outline'>
                    Filter
              </TextButton>
            </View>
            {filter}
            <Animated.View style={[{width: width+50}, {transform: [
                {
                  translateX: this.state.value.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0]
                  })
                }
              ]}]}>
            <FlatList
              style={{width: width+50}}
              removeClippedSubviews
              data={filteredList}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeperator}
              extraData={this.state}
              showsVerticalScrollIndicator={false}
            />
            </Animated.View>
          </View>
        </Content>
        <FooterAbsolute>
          { goToMap }
        </FooterAbsolute>

        <DropdownModal
          visible={this.state.modalVisible}
          selectedItems={this.state.categoryFilter}
          onSelectionsChange={this.onSelectionsChange}
          onPress={this.closeDropdown}
          onClear={this.resetCategoryFilter}
        />
      </Page>
    );
  }
}

export default ListScreen;