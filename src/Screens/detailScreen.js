import React from 'react'
import {
  Dimensions,
  View,
  FlatList
} from 'react-native'

import { TabActions } from '@react-navigation/native'

import Page from '../Components/Common/page'
import Header from '../Components/Common/header'
import Content from '../Components/Common/content'
import SectionHeader from '../Components/Common/sectionHeader'
import ContentText from '../Components/Common/contentText'
import Button from '../Components/Common/button'
import TextButton from '../Components/Common/textButton'
import EmptyButton from '../Components/Common/emptyButton'
import Title from '../Components/Common/title'
import SubTitle from '../Components/Common/subTitle'
import Paragraph from '../Components/Common/paragraph'
import LogoImage from '../Components/Common/logoImage'

import { FeatureCollection } from '../Assets/objects'
import { detailScreenSheet } from '../Components/Other/styles'
import { commonSheet } from '../Components/Common/styles'
import colors from '../Assets/colors'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = commonSheet
const detailStyles = detailScreenSheet
const { width } = Dimensions.get('window')

class DetailScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      path: undefined,
      closePlaques: [],
    };
  }

  componentDidMount() {
    this.setState({path: this.props.route.params.path})
    this.props.navigation.setParams({path: undefined})
    this.getNearbyPlaques()
  }

  componentDidUpdate(prevProps) {
    if(this.props.route.params.object != prevProps.route.params.object) {  
      this.getNearbyPlaques()
    }
  }

  goBack() {
    if(this.state.path === 'Map') {
      this.setState({path: undefined})
      this.props.navigation.dispatch(TabActions.jumpTo('Map'))
    }
    else if(this.state.path === 'Details') {
      this.setState({path: undefined})
      this.props.navigation.goBack();
    }
    else {
      this.setState({path: undefined})
      this.props.navigation.navigate('Categories');
    }
  }

  goToMap() {
    const items = this.state.closePlaques
    let query = ''
    for(let i = 0; items.length > i ; i++) {
      //console.log('Navigate: ',items[i].id,': ', items[i].properties.title)
          if(i == items.length-1) {
            query = query + items[i].properties.title
          }
          else {
            query = query + items[i].properties.title + '--'
          }
    }
    this.props.navigation.navigate(
      'Map', {query: query}
    )
  }

  getNearbyPlaques() {
    const { object } = this.props.route.params
      const closePlaques = FeatureCollection.features.sort((a, b) => {
        let aDist = this.getDistance(object.geometry.coordinates, a.geometry.coordinates)
        let bDist = this.getDistance(object.geometry.coordinates, b.geometry.coordinates)
        if(aDist < bDist) {
          return -1
      }
      else if(aDist > bDist) {
        return 1
      }
      else {
        return 0
      }
      })

      this.setState({closePlaques: closePlaques.slice(0, 6)})
  }

  getDistance (coords1, coords2) {
    var distance = Math.sin(Math.PI/180 * coords1[1]) * Math.sin(Math.PI/180 * coords2[1]) +
      Math.cos(Math.PI/180 * coords1[1]) * Math.cos(Math.PI/180 * coords2[1]) *
      Math.cos(Math.PI/180 * (coords1[0]-coords2[0]))
      distance = Math.acos(distance) * 6371000;;
      return (distance * 0.000621371);
  }

  renderItemSeperator() {
    return (
      <View style={detailStyles.closeLocationSeperator}/>
    )
  }

  renderItem = ({ item }) => {
    const { object } = this.props.route.params
    const distance = this.getDistance(object.geometry.coordinates, item.geometry.coordinates)
    return (
      <TouchableOpacity style={detailStyles.closeLocationItem}
        onPress={() => this.props.navigation.push('Details', {
          object: item,
          path: 'Details'
        })}>
            <SubTitle  numberOfLines={1} ellipsizeMode='tail'>{item.properties.title}</SubTitle>
            <Paragraph style={{color: colors.blue.light}} numberOfLines={1} ellipsizeMode='tail'>{
              distance < 0.1? (distance/0.000568182).toFixed(0) + " yards" : distance.toFixed(2) + " miles" 
              } - {item.properties.category}</Paragraph>
      </TouchableOpacity>
    )
  }
  
  render() {
    const { object } = this.props.route.params
    return(
      <Page>
        <Header>
          <Button icon="arrow-back" onPress={() => this.goBack()}/>
          <View style={{flex:5}}/>
          <LogoImage/>
          <EmptyButton/>
        </Header>

        <Content>
          <SectionHeader>
            <Title style={{textAlign: 'center'}}>{ object.properties.title }</Title>
          </SectionHeader>
          <ContentText style={[styles.noBottomPadding, {flex: 2.5}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <SubTitle>Location:</SubTitle>
              <Paragraph>{ object.properties.location }</Paragraph>
              <SubTitle>Information:</SubTitle>
              <Paragraph>{ object.properties.description }</Paragraph>
              
              <View style={detailStyles.buttonContainer}>
                <View style={{flex: 1}}>
                  <SubTitle>Categories:</SubTitle>
                  <Paragraph>{ object.properties.category }</Paragraph>
                </View>
                <TextButton
                  style={{margin: 0}}
                  onPress={() => 
                    this.props.navigation.navigate(
                    'Map', {query: object.properties.title}
                  )}
                  color={colors.white}
                  icon='location-outline'
                >
                  View on Map
                </TextButton>
              </View>
            </ScrollView>
          </ContentText>
          <SectionHeader>
            <SubTitle>Nearby Plaques</SubTitle>
          </SectionHeader>
          <ContentText style={[styles.noBottomPadding, {flex: 2}]}>
              <FlatList
                data={this.state.closePlaques.slice(1, 6)}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderItemSeperator}
                showsVerticalScrollIndicator={false}
              />
            <View style={detailStyles.buttonContainer}>
              <TextButton
                style={detailStyles.mapButton}
                onPress={() => this.goToMap()}
                color={colors.white}
                icon='location-outline'
              >
                View All on Map
              </TextButton>
            </View>
          </ContentText>
        </Content>
      </Page>
    );
  }
}

export default DetailScreen;