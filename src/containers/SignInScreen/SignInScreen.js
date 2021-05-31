import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import SocialCustomButton from '../../components/SocialCustomButton';
import Images from '../../constants/Images';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      img: Images.hide_password,
    };
  }
  setPasswordVisiblity = () => {
    if (this.state.hidePassword)
      this.setState({
        hidePassword: !this.state.hidePassword,
        img: Images.show_password,
      });
    else {
      this.setState({
        hidePassword: !this.state.hidePassword,
        img: Images.hide_password,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.marginBox}>
          <Image source={Images.logo} style={styles.logoI} />
          <Text style={styles.SignInText}>Sign In</Text>
          <View style={styles.InputMargin}>
            <CustomTextInput placeholder="Email Address" />
            <CustomTextInput
              placeholder="Password"
              secureTextEntry={this.state.hidePassword}
            />
            <TouchableOpacity
              style={styles.Eye}
              onPress={this.setPasswordVisiblity}>
              <Image style={styles.EyeColor} source={this.state.img} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgetPassword}>Forget Password</Text>
          </TouchableOpacity>
          <CustomButton
            title="Submit"
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          />
          <Text style={styles.orConnectWith}>or Connect with</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <SocialCustomButton Image={Images.facebook_Icon} Title="Facebook" />
            <SocialCustomButton
              Image={Images.instagram_Icon}
              Title="Instagram"
            />
          </View>
          <View style={styles.SignUpText}>
            <Text style={styles.AccountText}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={styles.SignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  logoI: {
    height: 125,
    width: 125,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  SignInText: {
    marginTop: 28.5,
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'left',
  },
  orConnectWith: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#919191',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  forgetPassword: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#9d9d9d',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  InputMargin: {
    marginTop: 10,
  },
  marginBox: {
    margin: 20,
  },
  SignUpText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43.5,
  },
  AccountText: {
    color: 'rgb(96,96,96)',
    fontSize: 15,
  },
  SignUp: {
    color: 'rgb(255,152,3)',
    fontSize: 15,
    fontWeight: '700',
  },
  Eye: {position: 'absolute', top: 75, right: 20},
  EyeColor: {marginTop: 15, height: 15, width: 22},
});

export default SignInScreen;
