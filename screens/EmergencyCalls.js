/**
 * Números de contacto para llamar policia, ambulancias, bomberos, etc
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

class EmergencyCalls extends Component {
  static navigationOptions = {
    title: 'Menú Principal',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#003366',
      borderBottomColor: 'white',
      borderBottomWidth: 2,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  };
  render() {
    return (
      <ImageBackground
        source={require('../img/back_image.png')}
        style={styles.container}>
        <View>
        <Image
            style={styles.logoQuimbaya}
            source={require('../img/escudo_quimbaya.png')}
          />
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.Logo}
              source={require('../img/ambulance.png')} />
            <Text style={styles.text}> Llamar Ambulancia </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.Logo}
              source={require('../img/security.png')} />
            <Text style={styles.text}> Llamar Policia </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Image
              style={styles.Logo}
              source={require('../img/red-cross.png')} />
            <Text style={styles.text}> Llamar Cruz Roja </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Image
              style={styles.Logo}
              source={require('../img/fire-station.png')} />
            <Text style={styles.text}> Llamar Bomberos </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Image
              style={styles.Logo}
              source={require('../img/trepador.png')} />
            <Text style={styles.text}>Llamar Defensa Civil </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Image
              style={styles.Logo}
              source={require('../img/hospital.png')} />
            <Text style={styles.text}>Llamar Hospital </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default EmergencyCalls;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
    width: '100%',
    height: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3366CC',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    color: '#FFCC00',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Logo: {
    width: 40,
    height: 40,
    resizeMode: 'stretch',
    marginRight: 30,
  },
  logoQuimbaya: {
    width: 50,
    height: 60,
    resizeMode: 'stretch',
  },
});