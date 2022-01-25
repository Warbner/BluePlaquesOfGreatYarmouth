//  --- React and React Native --- \\
import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Linking
} from 'react-native';

// --- Own Components --- \\
import Page from '../Components/Common/page'
import Header from '../Components/Common/header'
import Content from '../Components/Common/content'
import ContentText from '../Components/Common/contentText'
import Footer from '../Components/Common/footer'
import Button from '../Components/Common/button'
import TextButton from '../Components/Common/textButton';
import Title from '../Components/Common/title'
import SubTitle from '../Components/Common/subTitle'
import Paragraph from '../Components/Common/paragraph'
import LogoImage from '../Components/Common/logoImage'
import SocietyImage from '../Assets/Images/society.webp'

// --- Own Assets --- \\
import { commonSheet } from '../Components/Common/styles'
import { aboutScreenSheet } from '../Components/Other/styles'
import colors from '../Assets/colors';
import SectionHeader from '../Components/Common/sectionHeader';
const styles = commonSheet
const aboutStyles = aboutScreenSheet

const FacebookURL = "https://www.facebook.com/greatyarmouthlocalhistory"
const webURL = "https://www.greatyarmouthlocalhistoryandarchaeology.com/"

class AboutScreen extends React.Component {

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
        <Header>
          <Button icon="arrow-back" onPress={() => this.props.navigation.goBack()}/>
          <View style={{flex:6}}/>
          <LogoImage/>
        </Header>
        
        <Content>
          <SectionHeader>
            <Title style={{textAlign: 'center'}}>
                Great Yarmouth Local History and
                Archaeological Society
            </Title>
          </SectionHeader>
          <ContentText style={styles.noBottomPadding}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <SubTitle style={{textAlign: 'center'}}>
                "A society for people interested in exploring, researching 
                and preserving the history and archaeology of Great Yarmouth "
              </SubTitle>
              <View style={aboutStyles.bannerContainer}>
                <Image
                  style={aboutStyles.bannerImage}
                  source={SocietyImage}
                />
              </View>
              <View style={aboutStyles.navButtonContainer}>
                <TextButton
                  style={aboutStyles.navButton}
                  color={colors.white}
                  icon='logo-facebook'
                  onPress={() => this.handlePress(FacebookURL)}>
                    Facebook
                </TextButton>
                <TextButton
                  style={aboutStyles.navButton}
                  color={colors.white}
                  icon='globe-outline'
                  onPress={() => this.handlePress(webURL)}>
                    Our Website
                </TextButton>
              </View>
              <SubTitle>
              New Plaques
            </SubTitle>
            <Paragraph>
              Research for Blue Plaques is carried out by members at the request of individuals or 
              organisations, who fund their manufacture.  Each plaque is unveiled at a formal public 
              ceremony to which GYLHAS members (and the general public) are invited.
            </Paragraph>
            <Paragraph>
              The Blue Plaques, and consequent press coverage, have increased interest in the town's history 
              and have significantly raised the profile of heritage in the town.
            </Paragraph>
            </ScrollView>
          </ContentText>
        </Content>
      </Page>
    );
  }
}
export default AboutScreen;