import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class CustomButton extends React.Component {
  render() {
    return (
      <View style={styles.marginBox}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 10,
    backgroundColor: '#ff9803',
    shadowColor: 'rgba(255,152,3, 0.39)',
    shadowOffset: {
      width: 0,
      height: 9.5,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: 'white',
  },
  marginBox: {marginTop: 22.5},
});

export default CustomButton;
