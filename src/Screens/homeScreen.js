//  --- React and React Native --- \\
import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Linking,
  ScrollView
} from 'react-native';

// --- Third Party --- \\
import { TabActions } from '@react-navigation/native'

// --- Own Components --- \\
import Page from '../Components/Common/page'
import Header from '../Components/Common/header'
import SectionHeader from '../Components/Common/sectionHeader';
import Content from '../Components/Common/content'
import ContentText from '../Components/Common/contentText'
import Footer from '../Components/Common/footer'
import Title from '../Components/Common/title'
import SubTitle from '../Components/Common/subTitle'
import Paragraph from '../Components/Common/paragraph'
import LogoImage from '../Components/Common/logoImage'
import TextButton from '../Components/Common/textButton';

// --- Own Assets --- \\
import Book from '../Assets/Images/book.webp'
import { commonSheet } from '../Components/Common/styles'
import { homeScreenSheet } from '../Components/Other/styles'
import colors from '../Assets/colors';

const styles = commonSheet
const homeStyles = homeScreenSheet
const bookURL = 'https://www.greatyarmouthlocalhistoryandarchaeology.com/blue-plaques'

class HomeScreen extends React.Component {

  async handlePress(url) {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Oops! Something went wrong. Can't open: ${url}`);
    }
  }

  render() {
    return(
      <Page>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue.light} />
        <Header>
          <LogoImage/>
        </Header>

        <Content>
          <SectionHeader>
            <Title>Blue Plaques of Great Yarmouth</Title>
          </SectionHeader>
          <ContentText style={styles.noBottomPadding}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <SubTitle>Welcome</SubTitle>
            <Paragraph>
              Planning on exploring Great Yarmouth and it's great heritage sites? This app allows you
              to see all the locations of Blue Plaques around the Great Yarmouth Area in an 
              interactive map on your Android device.
            </Paragraph>
            <Paragraph>
              The Great Yarmouth Local History And Archeology Society has marked important heritage sites in 
              the Great Yarmouth area since 1981, facilitating the installation of 101 Blue Plaques
              on buildings of historical significance.
            </Paragraph>
            <TextButton
              style={{marginBottom: 0}}
              onPress={() => 
                this.props.navigation.navigate(
                'About Us'
              )}
              icon='information-circle-outline'
              color={colors.white}
            > 
              About The Society
            </TextButton>
            <SubTitle>Need Help?</SubTitle>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.parent}>
                <Paragraph>
                  Need help using our app? You can find tutorials on how to use our interactive map 
                  and categories list here
                </Paragraph>
              </View>
              <View style={{alignItems: 'center'}}>
                <TextButton
                  style={{margin: 0}}
                  color={colors.white}
                  icon='help-circle-outline'
                  onPress={() => this.props.navigation.dispatch(TabActions.jumpTo('Help'))}>
                    Help
                </TextButton>
              </View>
            </View>
            <SubTitle>Blue Plaque Publications</SubTitle>
            <View style={{flexDirection: 'row'}}>
            <Image
                  style={homeStyles.bookImage}
                  source={Book}
                />
              <View style={styles.parent}>
                <Paragraph>
                  Looking for more information, outlining the history behind each blue plaque?
                  GYLHAS has published two books that can be found on their web page.
                </Paragraph>
                <TextButton
                  style={{flex: 1, margin: 5}}
                  color={colors.white}
                  icon='book-outline'
                  onPress={() => this.handlePress(bookURL)}>
                    Find Books Here
                </TextButton>
              </View>
            </View>
            </ScrollView>
          </ContentText>
        </Content>
      </Page>
    );
  }
}

export default HomeScreen;