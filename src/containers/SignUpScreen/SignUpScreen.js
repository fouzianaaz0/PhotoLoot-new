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

class SignUpScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.marginBox}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignIn')}>
            <Image style={styles.backIcon} source={Images.back_arrow} />
          </TouchableOpacity>
          <Image source={Images.logo} style={styles.logo} />

          <Text style={styles.SignUp}>Sign Up</Text>
          <View style={styles.InputLayout}>
            <CustomTextInput placeholder="Name" />
            <CustomTextInput placeholder="User Name" />
            <CustomTextInput placeholder="Email Address" />
            <CustomTextInput placeholder="Create Password" />
          </View>

          <View style={styles.Term}>
            <Text style={styles.TermText}>I agree to the</Text>
            <TouchableOpacity>
              <Text style={{...styles.TermText, color: 'rgb(255,152,3)'}}>
                {' '}
                Terms & Conditions{' '}
              </Text>
            </TouchableOpacity>
            <Text style={styles.TermText}>of PhotoLoot</Text>
          </View>
          <View style={styles.InputLayout}>
            <CustomButton title="Submit" />
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
  logo: {
    height: 125,
    width: 125,
    alignSelf: 'center',
    justifyContent: 'center',
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
  marginBox: {
    margin: 20,
  },
  SignUp: {
    marginTop: 28.5,
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'left',
  },
  Term: {
    marginTop: 34.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  TermText: {
    fontSize: 12.5,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgb(96 ,96, 96)',
  },
  backIcon: {
    height: 30,
    width: 30,
  },
  InputLayout: {
    marginTop: 10,
  },
});

export default SignUpScreen;
