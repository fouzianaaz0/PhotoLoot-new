import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class CardLayout extends React.Component {
  render() {
    return (
      <View style={styles.MarginBox}>
        <TouchableOpacity style={styles.marginLayout}>
          <Image style={styles.ImageStyle} source={this.props.Image} />
          <ImageBackground
            style={styles.WhiteBase}
            source={require('../assets/Images/icWhiteBase.png')}>
            <View style={styles.TextLayout}>
              <Image style={styles.Icon} source={this.props.Icon} />
              <View style={styles.TextPosition}>
                <Text style={styles.CurrentText}>{this.props.challanges}</Text>
                <Text style={styles.StatusText}>{this.props.status}</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fieldBox: {
    marginTop: 15,
    backgroundColor: 'rgb(245, 245, 245)',
    height: 45,
    borderColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  WhiteBase: {
    width: 270,
    height: 60,
    shadowColor: 'rgba(123, 123, 123, 0.15)',
    shadowOffset: {
      width: 0,
      height: 7.5,
    },
    shadowRadius: 12,
    shadowOpacity: 1,
    position: 'absolute',
    top: 135.5,
    right: 40,
  },
  ImageStyle: {
    width: 345,
    height: 160,
    borderRadius: 10,
  },
  Icon: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 30,
    top: 5,
  },
  CurrentText: {
    fontSize: 15.3,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },
  StatusText: {
    fontSize: 11.3,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(77, 77, 77, 0.8)',
    opacity: 0.8,
    marginTop: 5,
  },
  TextLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  MarginBox: {
    margin: 20,
  },
  TextPosition: {
    position: 'absolute',
    left: 70,
  },
  marginLayout: {marginTop: 15},
});

export default CardLayout;
