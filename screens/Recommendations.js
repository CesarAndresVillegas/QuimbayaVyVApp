/**
 * Recomendaciones para las fiestas
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

class Recommendations extends Component {
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
        <ScrollView>
          <Image
            style={styles.logoQuimbaya}
            source={require('../img/escudo_quimbaya.png')} />
          <View style={styles.titleContainer}>
            <Text style={styles.textTittle}>Recomendaciones</Text>
            <Text style={styles.textSupport}>para vivir el festival de</Text>
            <Text style={styles.textTittle}>Velas y Faroles 2018</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textRecommendations}>- Llegar temprano para evitar trancones y lograr una buena ubicación de su vehículo.</Text>
            <Text style={styles.textRecommendations}>- Respete la ruta para recorrer los alumbrados. Siga las flechas de señalización para facilitar el flujo peatonal.</Text>
            <Text style={styles.textRecommendations}>- Estacione su vehículo en los parqueaderos autorizados que le garanticen seguridad.</Text>
            <Text style={styles.textRecommendations}>- Mantenga especial cuidado con sus niños. Todo niño debe estar acompañado de un adulto responsable.</Text>
            <Text style={styles.textRecommendations}>- Siempre camine por los andenes.</Text>
            <Text style={styles.textRecommendations}>- Mantena limpios los espacios.</Text>
            <Text style={styles.textRecommendations}>- Cuide sus objetos personales.</Text>
            <Text style={styles.textRecommendations}>- Ubique los puntos de información y atención a emergencias.</Text>
            <Text style={styles.textRecommendations}>- Evite la pólvora.</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
    width: '100%',
    height: '100%',
  },
  logoQuimbaya: {
    width: 50,
    height: 60,
    resizeMode: 'stretch',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  textTittle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSupport: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  titleContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  textContainer: {
    marginHorizontal: 15
  },
  textRecommendations: {
    color: 'white',
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});