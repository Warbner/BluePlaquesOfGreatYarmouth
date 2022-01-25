//  --- React and React Native --- \\
import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';

// --- Own Components --- \\
import PickerItem from './pickerItem'

// --- Own Assets --- \\
import { commonSheet } from '../Common/styles'
import { listScreenSheet, dropdownSheet } from './styles'
import colors from '../../Assets/colors'
const styles = commonSheet;
const listStyles = listScreenSheet
const dropdownStyles = dropdownSheet


class MultiplePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items: [],
        };
    }

    componentDidMount() {
        this.buildSelectedItems(this.props)
        this.setState({items: this.props.data})
    }

    componentDidUpdate(prevProps) {
        if(this.props.selectedItems !== prevProps.selectedItems) {
            this.buildSelectedItems(this.props)
            this.setState({items: this.props.data})
        }
    }

    buildSelectedItems({data, selectedItems}) {
        data.forEach((item) => {
            item.select = selectedItems.some((i) => i.id === item.id)

        })
    }

    onPress(item) {
        let { selectedItems } = this.props
        const selected = selectedItems.findIndex((i) => i.id == item.id) > -1
        if((selected == true)) {
            selectedItems = selectedItems.filter((i) => i.id !== item.id)
        }
        else {
            selectedItems = selectedItems.concat(item)
        }
        this.props.onSelectionsChange(selectedItems, item)
    }
    
    keyExtractor = (item) => item.id.toString()

    renderSeparator = () => {
        return (
            <View style={{height: 5}}/>
        )
    }
    
    renderCategory = ({ item }) => {
        let { selectedItems } = this.props
        const selected = (selectedItems.findIndex((i) => i.id == item.id) > -1)
        return (
            <PickerItem 
                value={item.value}
                onPress={() => this.onPress(item)}
                color={selected? colors.white : colors.blue.standard}
                style={{height: 50}}
                backgroundColor={selected? colors.blue.light :  colors.white }
                icon={selected? "remove-circle-outline" : "add-circle-outline"}
            />
        )
    }

    render() {
        let filteredData = this.state.items
        if(this.props.search.length > 0) {
            filteredData = this.state.items.filter((item) => {
            if(item.id.includes(this.props.search.toLowerCase())) {
                return true
                }
            })
        }
        return (
            <FlatList
                style={dropdownStyles.dropdownList}
                data={filteredData}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderCategory}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={this.renderSeparator}
                extraData = {this.state}
            />
        )
    }
}

export default MultiplePicker;