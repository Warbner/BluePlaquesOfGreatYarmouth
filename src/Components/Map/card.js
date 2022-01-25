//  --- React and React Native --- \\
import React from 'react';
import {
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons';

// --- Own Components --- \\
import Title from '../Common/title';
import SubTitle from '../Common/subTitle';
import Paragraph from '../Common/paragraph';
import TextButton from '../Common/textButton'

// --- Own Assets --- \\
import colors from '../../Assets/colors'
import { cardSheet } from './styles'
const cardStyles = cardSheet

// Component presents data for the active plaque on map
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value: new Animated.Value(150)
    };
    
    // Animation to slide card up from bottom of screen when opened
    this.openCard = Animated.timing(this.state.value, {
      toValue: 0,
      duration: 50,
      useNativeDriver: false
    })

    // Animation to slide card back down when card is closed
    this.closeCard = Animated.timing(this.state.value, {
      toValue: 150,
      duration: 25,
      useNativeDriver: false
    })
    this.handleClose=this.handleClose.bind(this)
}
  componentDidMount() {
    if(this.props.visible == true) {
      return this.openCard.start()
    }
  }

  // If card is updated and set to visible, slide card up
  componentDidUpdate(prevProps) {
    if(prevProps.visible != this.props.visible && this.props.visible == true) {
      return this.openCard.start()
    }
  }

  // function that handles when the close button on the card is pressed
  handleClose() {
    return this.closeCard.start(() => this.props.onClosePress())
  }

  // get the distance between two coordinates
  // Spherical law of cosines formula
  getDistance (coords1, coords2) {
    var distance = Math.sin(Math.PI/180 * coords1[1]) * Math.sin(Math.PI/180 * coords2[1]) +
      Math.cos(Math.PI/180 * coords1[1]) * Math.cos(Math.PI/180 * coords2[1]) *
      Math.cos(Math.PI/180 * (coords1[0]-coords2[0]))
      distance = Math.acos(distance) * 6371000;;
      return (distance * 0.000621371);
  }
    
  // render Card
  render() {
    const top = this.state.value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    let title = ''
    let location = ''
    let distance = 0
    let distanceFromPlaque = this.props.children

    if(this.props.object != undefined) {
      title = this.props.object.properties.title
      location = this.props.object.properties.location
      if(this.props.userLocation != undefined) {
        distance = this.getDistance(this.props.userLocation, this.props.object.geometry.coordinates)
        distanceFromPlaque = (
          <SubTitle>{distance < 0.1? (distance/0.000568182).toFixed(0) + " yards" : distance.toFixed(2) + " miles" } -</SubTitle>
        )
      }
    }
    return(
      <View style={cardStyles.overlay}>
        <Animated.View style={[cardStyles.cardView, {top}]}>
            <View style={cardStyles.header}>
              <Title style={{flex: 5, fontSize: 20}} numberOfLines={1} ellipsizeMode='tail'>{title}</Title>
              <TouchableOpacity style={{ zIndex: 3 }}
              onPress={this.handleClose}
              >
                <Icon name='close-circle-outline' color={colors.blue.standard} size={32}/>
              </TouchableOpacity>
            </View> 
            <View style={cardSheet.main}>
            <Paragraph>{distanceFromPlaque} {location}</Paragraph>
            </View>
            <View style={cardStyles.footer}>
              <TextButton
                style={{margin:10}}
                onPress={this.props.onReadMorePress}
                color={colors.white}
                icon={'open-outline'}>
                Read More 
              </TextButton>
            </View>
          </Animated.View>
      </View>
    )
  }
}

export default Card