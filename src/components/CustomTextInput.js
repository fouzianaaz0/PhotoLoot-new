import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

class CustomTextInput extends React.Component {
  render() {
    return (
      <View style={styles.fieldBox}>
        <TextInput
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.props.onChangeText}
        />
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
});

export default CustomTextInput;
