//  --- React and React Native --- \\
import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

// --- Third Party --- \\
import Icon from 'react-native-vector-icons/Ionicons';

// --- Own Components --- \\
import Page from '../Components/Common/page'
import Header from '../Components/Common/header'
import SectionHeader from '../Components/Common/sectionHeader';
import Content from '../Components/Common/content'
import ContentText from '../Components/Common/contentText'
import Title from '../Components/Common/title'
import SubTitle from '../Components/Common/subTitle'
import Paragraph from '../Components/Common/paragraph'
import FunctionlessButton from '../Components/Common/functionlessButton'
import LogoImage from '../Components/Common/logoImage'

// --- Own Assets --- \\
import { commonSheet } from '../Components/Common/styles'
import colors from '../Assets/colors';

const styles = commonSheet
class HelpScreen extends React.Component {

  render() {
    return(
      <Page>
        <Header>
          <LogoImage/>
        </Header>
        <Content>
          <SectionHeader>
            <Title> Tutorials </Title>
          </SectionHeader>
          <ContentText style={styles.noBottomPadding}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <SubTitle>
              Need Help?
            </SubTitle>
            <Paragraph>
              First time using this app or just curious how to use all of its features? 
              The information below will help you better understand what this app has to offer
              to make your experience in Great Yarmouth more enjoyable
            </Paragraph>
            <SectionHeader>
              <SubTitle>Interactive Map</SubTitle>
            </SectionHeader>
            <SubTitle>Search Results</SubTitle>
              <Paragraph>
                Use of the searchbar will present search results once you begin typing. You will see a symbol
                next to a result, which is either a location or category.
              </Paragraph>
              
              <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center'}}>
                  <Icon name='compass-outline' color={colors.blue.standard} size={26} style={{marginRight: 5}} />
                </View>
                <View style={styles.parent}>
                  <Paragraph>
                    Once a location result is pressed, the map will show the location of the selected blue plaque 
                    selected on the map
                  </Paragraph>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center'}}>
                  <Icon name='list-outline' color={colors.blue.standard} size={26} style={{marginRight: 5}} />
                </View>
                <View style={styles.parent}>
                <Paragraph>
                  Selecting a category result will show you all plaques on the map that fall into that category 
                </Paragraph>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
              <FunctionlessButton icon='search'/>
            </View>
              <View style={{flex: 1}}>
                <SubTitle><Paragraph>Submit Search</Paragraph></SubTitle>
                  <Paragraph>
                    Please note, if you don't wish to select any of the search results, you can use the search button
                    instead
                  </Paragraph>
              </View>
            </View>
            <SubTitle>Navigation Options</SubTitle>
            <Paragraph>Navigation buttons can be found in the bottom
            right of the map</Paragraph>

            <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <FunctionlessButton icon='reload'/>
            </View>
              <View style={{flex: 1}}>
                <SubTitle><Paragraph>Refresh Map</Paragraph></SubTitle>
                <Paragraph>
                  The refresh button allows you to quickly zoom back out to allow you to see Great Yarmouth
                  in it's entirety. any plaque you have selected will also close, giving you a full view of the
                  interactive map.
                </Paragraph>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <FunctionlessButton icon='navigate-outline'/>
              <FunctionlessButton icon='navigate'/>
            </View>
              <View style={{flex: 1}}>
                <SubTitle><Paragraph>Follow User Location</Paragraph></SubTitle>
                <Paragraph>
                  Whilst this application does not give complete directions to your desired plaque locations, 
                  we have tried our best to offer as much as possible to help you find your way around the Great 
                  Yarmouth area.
                </Paragraph>
                <Paragraph>
                  Once pressed, the map will zoom to your location and track your location as you move around the 
                  Great Yarmouth, to make navigating around town easier. To go back to normal, simply press the location button again.
                </Paragraph>
              </View>
            </View>

            <SectionHeader>
              <SubTitle>Category List</SubTitle>
            </SectionHeader>
            <SubTitle>Category Dropdown</SubTitle>
            <Paragraph>
              You can filter the list of plaques via the dropdown category selection. To deselect a category
              simply press it a second time.
            </Paragraph>
            <Paragraph>
              You can select multiple categories at the same time, which can be deselected all together using 
              the clear button in the top right of the category dropdown. Please note this will only be present 
              if a category is selected.
            </Paragraph>
            <SubTitle>Select Multiple Plaques</SubTitle>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
                <Icon name='radio-button-on-outline' color={colors.blue.standard} size={26} style={{marginRight: 5}} />
              </View>
              <View style={styles.parent}>
                <Paragraph>
                  You can select multiple plaques of your choice to view on the map by either pressing the select
                  button in the top right corner, or pressing a list item for an extended period of time.
                </Paragraph>
              </View>
              </View>
              <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
                <Icon name='radio-button-off-outline' color={colors.blue.standard} size={26} style={{marginRight: 5}} />
              </View>
              <View style={styles.parent}>
                <Paragraph>
                  To deselect press cancel in the top right corner, or deselect each item you've selected with a 
                  second press.
                </Paragraph>
              </View>
              </View>
            </ScrollView>
          </ContentText>
        </Content>
      </Page>
    );
  }
}

export default HelpScreen;