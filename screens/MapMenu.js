/**
 * Menú mapas
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

class MapMenu extends Component {
  static navigationOptions = {
    title: 'Menú Mapas',
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('MapRoute')}>
            <Text
              style={styles.text}>
              Mapa completo del evento
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('MapRoute7')}>
            <Text
              style={styles.text}>
              Ruta sugerida para el 7 de Dic.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('MapRoute8')}>
            <Text
              style={styles.text}>
              Ruta sugerida para el 8 de Dic.
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default MapMenu;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#003366',
    width: '100%',
    height: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3366CC',
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    color: '#FFCC00',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoQuimbaya: {
    marginTop: '10%',
    marginBottom: '10%',
    width: 50,
    height: 60,
    resizeMode: 'stretch',
  },
});