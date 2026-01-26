import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = ({ backgroundColor, text }) => {
  return (
    <View style={[styles.square, { backgroundColor }]}>
      {text && <Text>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Square;
