//  --- React and React Native --- \\
import React from 'react';
import {
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons'

// --- Own Components --- \\
import Paragraph from '../Common/paragraph';
import EmptyButton from '../Common/emptyButton';

// --- Own Assets --- \\
import { searchbarSheet } from '../Map/styles'
import colors from '../../Assets/colors'
const styles = searchbarSheet;

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem = ({ item }) => {
    let value = ''
    let icon = ''
    try {
        value = item.properties.title
        icon = 'location-outline'
    }
    catch {
        value = item
        icon = 'list-outline'
    }
    return (
        <TouchableOpacity style={styles.resultItem}
            onPress={() => this.props.onPress(item)}>
            <Icon name={icon} color={colors.blue.standard} size={20}/>
            <Paragraph numberOfLines={1} ellipsizeMode='tail'>{value}</Paragraph>
        </TouchableOpacity>
    )
  }

  renderItemSeperatorComponent() {
      return (
          <View style={{height: 1, backgroundColor:colors.gray.veryLight}}/>
      )
  }

    render() {
        return (
            <View style={styles.resultsContainer}>
                <View style={styles.topPlacement}>
                    <View style={styles.results}>
                        <View style={styles.resultsList}>
                        {this.props.results!=0?
                        <FlatList
                                removeClippedSubviews
                                data={this.props.results}
                                renderItem={this.renderItem}
                                ItemSeparatorComponent={this.renderItemSeperatorComponent}
                                keyExtractor={(item,index) => id=index.toString()}
                                showsVerticalScrollIndicator={false}
                            /> :
                        <Paragraph style={{textAlign: 'center', color: colors.gray.light}}>No Results Found</Paragraph>}
                        </View>
                    </View>
                    <EmptyButton/>
                </View>
            </View>
        );
    }
}

export default SearchResults;