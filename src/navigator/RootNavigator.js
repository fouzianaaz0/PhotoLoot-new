import React from 'react';
import {Image} from 'react-native';
import SignInScreen from '../containers/SignInScreen/SignInScreen';
import SignUpScreen from '../containers/SignUpScreen/SignUpScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ForgetPasswordScreen from '../containers/ForgetPasswordScreen/ForgetPasswordScreen';
import VerificationScreen from '../containers/VerificationScreen/VerificationScreen';
import ResetPasswordScreen from '../containers/ResetPasswordScreen/ResetPasswordScreen';
import HomeScreen from '../containers/HomeScreen/HomeScreen';
import SeacrhScreen from '../containers/SearchScreen/SearchScreen';
import ProfileScreen from '../containers/ProfileScreen/ProfileScreen';
import NotificationScreen from '../containers/NotificationScreen/NotificationScreen';
import SettingScreen from '../containers/SettingScreen/SettingScreen';
import Images from '../constants/Images';

const Stack = createStackNavigator();
const AuthenticationScreen = createStackNavigator();
const HomeTab = createBottomTabNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const Authentication = () => {
  return (
    <AuthenticationScreen.Navigator screenOptions={screenOptionStyle}>
      <AuthenticationScreen.Screen name="SignIn" component={SignInScreen} />
      <AuthenticationScreen.Screen
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <AuthenticationScreen.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
      />
      <AuthenticationScreen.Screen
        name="Verification"
        component={VerificationScreen}
      />
      <AuthenticationScreen.Screen
        name="Reset"
        component={ResetPasswordScreen}
      />
    </AuthenticationScreen.Navigator>
  );
};

const HomeNav = () => {
  return (
    <HomeTab.Navigator tabBarOptions={{showLabel: false}}>
      <HomeTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 40, width: 40}}
              source={focused ? Images.home_selected : Images.home_unselected}
              resizeMode="contain"
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Search"
        component={SeacrhScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 40, width: 40}}
              source={
                focused ? Images.search_selected : Images.search_unselected
              }
              resizeMode="contain"
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 40, width: 40}}
              source={
                focused ? Images.profile_selected : Images.profile_unselected
              }
              resizeMode="contain"
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 40, width: 40}}
              source={
                focused
                  ? Images.notification_selected
                  : Images.notification_unselected
              }
              resizeMode="contain"
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 40, width: 40}}
              source={
                focused ? Images.setting_selected : Images.setting_unselected
              }
              resizeMode="contain"
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

const PhotoLootNav = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="HomeScreen" component={HomeNav} />
    </Stack.Navigator>
  );
};

export default PhotoLootNav;
