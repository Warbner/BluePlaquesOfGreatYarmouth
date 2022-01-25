import React from 'react';
import {
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

// src Files
import HomeScreen from './src/Screens/homeScreen'
import HelpScreen from './src/Screens/helpScreen'
import AboutScreen from './src/Screens/aboutScreen'
import MapScreen from './src/Screens/mapScreen'
import ListScreen from './src/Screens/listScreen'
import DetailScreen from './src/Screens/detailScreen'

import colors from './src/Assets/colors'
import { commonSheet } from './src/Components/Common/styles'

const styles = commonSheet

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();

// Main tab navigator component for application's bottom tab
function TabScreen() {
  return (
    <View style={styles.parent}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home Stack"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home Stack') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } 
              else if (route.name === 'Map') {
                iconName = focused
                ? 'map' : 
                'map-outline';
              }
              else if (route.name === 'Categories') {
                iconName = focused
                ? 'list' : 
                'list-outline';
              }
              else if (route.name === 'Help') {
                iconName = focused
                ? 'help-circle' : 
                'help-circle-outline';
              }
              return <Icon name={iconName} size={26} color={color} />;
            },
          })}
          activeColor={colors.blue.standard}
          activeTintColor={colors.gray.light}
          barStyle={{ borderTopColor: colors.gray.light, borderTopWidth: 1, 
            backgroundColor: colors.white, color: colors.gray.standard }}
          
          >
            <Tab.Screen name="Home Stack" component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: colors.white,
              tabBarAccessibilityLabel: 'Navigate to Home'
            }}/>
            <Tab.Screen name="Map" component={MapScreen}
            options={{
              tabBarLabel: 'Map',
              tabBarColor: colors.white,
              tabBarAccessibilityLabel: 'Navigate to Map'
            }}/>
            <Tab.Screen name="Categories" component={ListStackScreen}
            options={{
              tabBarLabel: 'List',
              tabBarColor: colors.white,
              tabBarAccessibilityLabel: 'Navigate to List'
            }}/>
            <Tab.Screen name="Help" component={HelpScreen}
            options={{
              tabBarLabel: 'Help',
              tabBarColor: colors.white,
              tabBarAccessibilityLabel: 'Navigate to Help'
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Categories" component={ListScreen} 
      options={ ({ navigation, route }) => ({
        headerTitle: '',
        headerTransparent: true, 
        headerStyle: { borderBottomWidth: 0, height: 0},
        headerLeft: () => null,
        })}
      />

      <ListStack.Screen name="Details" component={DetailScreen}
        options={ ({ navigation, route }) => ({
          headerTitle: '',
          headerTransparent: true, 
          headerStyle: { borderBottomWidth: 0, height: 0},
          headerLeft: () => null,
        })}
      />

    </ListStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}  
        options={() => ({
          headerTitle: '',
          headerTransparent: true, 
          headerStyle: { borderBottomWidth: 0, height: 0},
          headerLeft: () => null,
        })}
      />

      <HomeStack.Screen name="About Us" component={AboutScreen} 
        options={() => ({
          headerTitle: '',
          headerTransparent: true, 
          headerStyle: { borderBottomWidth: 0, height: 0},
          headerLeft: () => null,
        })}
      />
    </HomeStack.Navigator>
  );
}

export default TabScreen;