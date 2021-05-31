import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

class SocialCustomButton extends React.Component {
  render() {
    return (
      <View style={styles.marginBox}>
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.Icon} source={this.props.Image} />
            <Text style={styles.Title}>{this.props.Title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 145,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(191, 191, 191, 0.5)',
    shadowOffset: {
      width: 0,
      height: 5.5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  Title: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  marginBox: {marginTop: 22.5},
});

export default SocialCustomButton;
