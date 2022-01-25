//  --- React and React Native --- \\
import React from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View
} from 'react-native';

// --- Third Party --- \\
import MapboxGL from "@react-native-mapbox-gl/maps"
MapboxGL.setAccessToken("pk.eyJ1IjoiZXplMTZrdnUiLCJhIjoiY2toeHNzZnVqMDNpdjM0b2FpcG54eXd2cSJ9.U2OqNc4hDgWh2amx6e7Kfg")
MapboxGL.setConnected(true)

// --- Own Components --- \\
import Page from '../Components/Common/page'
import HeaderAbsolute from '../Components/Common/headerAbsolute'
import FooterAbsolute from '../Components/Common/footerAbsolute'
import Button from '../Components/Common/button'
import SearchBar from '../Components/Map/searchBar'
import SearchResults from '../Components/Map/searchResults'
import Card from '../Components/Map/card'

// --- Own Assets --- \\
import markerIcon from '../Assets/Images/icon.png'
import selectedMarkerIcon from '../Assets/Images/iconSelected.png'
import { FeatureCollection } from '../Assets/objects'
import { mapScreenSheet } from '../Components/Map/styles'

const mapStyles = mapScreenSheet
const categories = [
  'Artists', 'Entertainment', 'Events', 'Fishing', 'Inventors', 'Medical',
  'Military', 'Nelson', 'Novelists', 'People', 'Places', 'Religious', 'Sporting'
];

const IS_ANDROID=Platform.OS==='android';

export default class MapScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isAndroidPermissionGranted : false,
      isFetchingAndroidPermission : IS_ANDROID,
      
      coordinates: [1.73138161812, 52.6067659919],
      followUserLocation: false,
      userLocation: undefined,

      objects: FeatureCollection,
      activePlaque: null,
      activeIndex: -1,
      cardVisible: false,

      search: '',
      submittedSearch: '',
      objectQueries: undefined,
      queryCoords: [],
  };

    this.onSourceLayerPress = this.onSourceLayerPress.bind(this);
    this.onRefresh=this.onRefresh.bind(this)
    this.goToDetails=this.goToDetails.bind(this)
    this.goBack=this.goBack.bind(this)
    this.onClosePress=this.onClosePress.bind(this)
    this.toggleFollowUser=this.toggleFollowUser.bind(this)
    this.onRemoveText=this.onRemoveText.bind(this)
    this.buildCollection=this.buildCollection.bind(this)
    this.onSubmitSearch=this.onSubmitSearch.bind(this)
    this.onChangeText=this.onChangeText.bind(this)
    this.selectResult=this.selectResult.bind(this)
    this.onReset=this.onReset.bind(this)
    this.setActivePlaque=this.setActivePlaque.bind(this)
  }

  async componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
    if(IS_ANDROID){
      const isGranted=await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted : isGranted,
        isFetchingAndroidPermission : false,
      });
    }
  }

  componentDidUpdate() {
    try {
      const { query } = this.props.route.params

      //console.log(search.split("--"))
      if(query !== undefined) {
        if(this.state.objectQueries !== query) {
          this.setState({objectQueries: query.split("--")})
          this.resetActivePlaque()
          this.resetCamera()
          const object = this.state.objects.features.find(item => 
            item.properties.title == objectQueries[0])
          this.setState({queryCoords: object.geometry.coordinates})
          this.props.navigation.setParams({query: undefined})
          //console.log('update: ', query)
        }
      }
    }
    catch{

    }
  }

  goToDetails() {
    this.props.navigation.navigate('Categories', {
      screen:'Details',
      params: {
        object: this.state.activePlaque,
        path: 'Map'}
    });
  }
  
  goBack() {
    this.props.navigation.goBack()
    this.onReset()
  }

  onSourceLayerPress(event) {
    const feature = event.features[0];
    this.setActivePlaque(feature)
    this.goToPlaque(feature)
  }

  setActivePlaque(object) {
    const plaque = this.state.objects.features.find(i => i.id == object.id)
    //console.log("Active Plaque: ", object.id)
    this.setState({activePlaque: plaque,
      activeIndex: plaque.id})
  }

  resetActivePlaque() {
    this.setState({activePlaque: null,
      activeIndex: -1,
      cardVisible: false})
  }

  goToPlaque(object) {
    this.setState({cardVisible: true})
      this.camera.setCamera({
        centerCoordinate: object.geometry.coordinates,
        zoomLevel: 16,
        pitch: 45,
        animationDuration: 1000,
    })
  }

  onClosePress() {
    this.resetActivePlaque()
    this.camera.setCamera({
      pitch: 0,
      animationDuration: 1000
    })
  }

  onReset() {
    this.setState({objectQueries: undefined})
    this.setState({queryCoords: []})
    this.resetActivePlaque()
  }
  
  onRefresh() {
    this.resetActivePlaque()
    this.resetCamera()
  }

  resetCamera() {
    this.camera.setCamera({
      centerCoordinate: this.state.coordinates,
      zoomLevel: 13,
      pitch: 0,
      heading: 0,
      animationDuration: 1000
    })
  }

  toggleFollowUser() {
    this.setState({followUserLocation: !this.state.followUserLocation})
  }

  filterText(text) {
    return text.toLowerCase().replace("'","").replace("’","")
  }

  buildCollection() {
    let collection = []
    if(this.state.objectQueries != undefined) {
      for(let x in this.state.objectQueries) {
        collection = collection.concat(this.state.objects.features.find(item => 
          item.properties.title == this.state.objectQueries[x]))
      }
    }
    else {
      const search = this.filterText(this.state.submittedSearch)
      collection = this.state.objects.features.filter(item => {
        return this.filterText(item.properties.title).includes(search) ||
        this.filterText(item.properties.location).includes(search) ||
        this.filterText(item.properties.category).includes(search)
      })
    }
    //console.log('Collection: ', collection)
    //console.log('Collection Size: ', collection.length)
    return {
      "type": "FeatureCollection",
      "features": collection.map(item => {
        //console.log(item.id,': ', item.properties.title)
        return {
          type: "Feature",
          id: item.id,
          properties: {
              icon: this.state.activeIndex === item.id ? 'selectedIcon' : 'icon',
          },
          geometry: {
            type: "Point",
            coordinates: item.geometry.coordinates,
          }
        }
      })
    }
  }

  onRemoveText() {
    this.setState({search: '',
    submittedSearch: ''})
  }

  selectResult(item) {
    try {
      this.setState({search: item.properties.title,
        submittedSearch: item.properties.title})
        this.setActivePlaque(item)
        this.goToPlaque(item)
    }
    catch {
      this.setState({search: item,
        submittedSearch: item})
    }
    
  }

  onSubmitSearch() {
    this.setState({submittedSearch: this.state.search})
    Keyboard.dismiss()
  }

  onChangeText(search) {
    this.setState({search})
  }

  render() {

    const isQuery = this.state.objectQueries !== undefined
    let refreshButton = this.props.children
    if(this.state.followUserLocation == false) {
      refreshButton = (
        <Button icon={"reload"} onPress={this.onRefresh} />
      )
    }
    let followUserLocationButton = this.props.children
    if(this.state.userLocation != undefined) {
      followUserLocationButton = (
        <Button 
          style={{marginTop: 0}} 
          icon={this.state.followUserLocation ? "navigate" : "navigate-outline"} 
          onPress={this.toggleFollowUser}/>
      )
    }
    let card = this.props.children
    if(this.state.cardVisible == true) {
      //console.log('Card Called')
      card = (
        <Card
          visible={this.state.cardVisible}
          object={this.state.activePlaque}
          userLocation={this.state.userLocation}
          onReadMorePress={this.goToDetails}
          onClosePress={this.onClosePress}
        />
      )
    }
    
    let headerCenter = isQuery? (
      <View style={{flex: 5}}/>) : 
      (<SearchBar
        onSubmitEditing={this.onSubmitSearch}
        onChangeText={this.onChangeText}
        value={this.state.search}
        onPress={this.onRemoveText}
      />)
    const resultsList = categories.concat(this.state.objects.features)
    let results = this.props.children
    if(this.state.search != '' && this.state.search != this.state.submittedSearch) {
      results = (
        <SearchResults
        results={resultsList.filter(item => {
          try {
            if(this.filterText(item.properties.title).includes(this.filterText(this.state.search)) == true) {
              return true
            }
          }
          catch {
            if(this.filterText(item).includes(this.filterText(this.state.search)) == true) {
              return true
            }
          }
        })}
        onPress={(value) => this.selectResult(value)}
        />
      )
    }
    let backButton = this.props.children
    if(isQuery == true) {
      backButton = (
        <Button icon={"arrow-back"} onPress={this.goBack}/>
      )
    }
    return(
      <Page>
        <HeaderAbsolute>
            {backButton}
            {headerCenter}
          <Button icon={isQuery? "close" :"search"} onPress={isQuery? this.onReset : this.onSubmitSearch}/>
        </HeaderAbsolute>
          {results}
          <TouchableWithoutFeedback style={{flex: 1, zIndex: 0}}
              onPress={() => Keyboard.dismiss()}>
            <MapboxGL.MapView
              style={mapStyles.map}
              styleURL={'mapbox://styles/eze16kvu/cknrtciue11r217pubvlsf4i9'}
              ref ={c=>(this._map=c)}
              showUserLocation={IS_ANDROID && this.state.isAndroidPermissionGranted}
              localizeLabels={true}
              compassEnabled={false}
              surfaceView={true}
            >

              <MapboxGL.Camera
                zoomLevel={13}
                animationMode={'flyTo'}
                animationDuration={1200}
                followUserLocation={this.state.followUserLocation}
                followUserMode={'compass'}
                followPitch={50}
                followZoomLevel={17}
                ref={c=>(this.camera=c)}
                centerCoordinate={this.state.coordinates}
                pitch={0}
              />

              <MapboxGL.UserLocation
                onUpdate={(location) => {if(location != undefined) {this.setState({userLocation : 
                  [location.coords.longitude, location.coords.latitude]})}}}
                showsUserHeadingIndicator
                androidRenderMode='compass'
                onPress={this.toggleFollowUser}/>

              <MapboxGL.Images images={{ icon:markerIcon, selectedIcon:selectedMarkerIcon}}/>

              <MapboxGL.ShapeSource
                id="ShapeSource"
                shape={this.buildCollection()}
                hitbox={{ width: 20, height: 20 }}
                onPress={this.onSourceLayerPress}
                clusterRadius={0}
              >
                <MapboxGL.SymbolLayer
                  id="PlaqueIcon" 
                  style={{
                      iconImage: ['get', 'icon'],
                      iconSize: 0.6,
                      iconAllowOverlap: true
                  }}
                  minZoomLevel={1}
                  maxZoomLevel={30}
                />
              </MapboxGL.ShapeSource>

            </MapboxGL.MapView>
          </TouchableWithoutFeedback>
          <FooterAbsolute>
            {refreshButton}
            {followUserLocationButton}
            {card}
          </FooterAbsolute>
      </Page>
    );
  }
}
