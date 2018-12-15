import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
  <TextInput
    style={styles.input}
    underlineColorAndroid='transparent'
    {...props}
    style={ [styles.input, props.style] } />

);

const styles=StyleSheet.create({
  input: {
    width: '95%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10
  }
});

export default defaultInput;
