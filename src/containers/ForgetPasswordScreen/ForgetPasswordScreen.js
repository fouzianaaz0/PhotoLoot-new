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
import Images from '../../constants/Images';

class ForgetPasswordScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.marginBox}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignIn')}>
            <Image style={styles.backIcon} source={Images.back_arrow} />
          </TouchableOpacity>
          <Image source={Images.logo} style={styles.logo} />

          <Text style={styles.SignUp}>Forgot Password?</Text>
          <Text style={styles.Details}>
            Don’t worry! enter your registered email ID in order to receive
            reset password instructions.
          </Text>
          <View style={styles.InputLayout}>
            <CustomTextInput placeholder="Email Address" />
          </View>
          <CustomButton
            title="Submit"
            onPress={() => this.props.navigation.navigate('Verification')}
          />
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
  logo: {
    height: 125,
    width: 125,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Details: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 21,
    textAlign: 'left',
    letterSpacing: 0,
    color: '#9d9d9d',
    marginTop: 20,
  },
  marginBox: {
    margin: 20,
  },
  SignUp: {
    marginTop: 28.5,
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'left',
  },
  backIcon: {
    height: 30,
    width: 30,
  },
  InputLayout: {
    marginTop: 10,
  },
});

export default ForgetPasswordScreen;
