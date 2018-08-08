/**
 * Ganadores anteriores de los concursos
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class PrevWinner extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Ganadores anteriores de los concursos</Text>
      </View>
    );
  }
}

export default PrevWinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});