/**
 * Menú principal
 * AGREGAR MENU DE GALERIA DE GANADORES ANETRIORES
 * AGREGAR MENU PROMOCIONAL FUNDACION VELAS Y FAROLES
 * AGREGAR MENU DE PROGRAMACION ESAS FECHAS
 * agregar pantalla de recomendaciones
 * 
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

class MainMenu extends Component {
  static navigationOptions = {
    header: null,
  }
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
            onPress={() => this.props.navigation.navigate('MapMenu')}>
            <Text
              style={styles.text}>
              Mapa del evento
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('CourrentRank')}>
            <Text
              style={styles.text}>
              Más votados
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('EmergencyCalls')}>
            <Text
              style={styles.text}>
              Llamadas de emergencia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Recommendations')}>
            <Text
              style={styles.text}>
              Recomendaciones
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
            <Text
              style={styles.text}>
              Programación del evento
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('WhoWeAre')}>
            <Text
              style={styles.text}>
              Quienes somos?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Judges')}>
            <Text
              style={styles.text}>
              Jurados del Festival
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoQuimbaya: {
    width: 50,
    height: 60,
    resizeMode: 'stretch',
  },
});