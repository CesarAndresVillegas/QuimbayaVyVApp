/**
 * Quienes somos de la fundación velas y faroles
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Button,
  Linking,
} from 'react-native';

class WhoWeAre extends Component {
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
            <Text style={styles.textTittle}>Quiénes Somos?</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textRecommendations}>La Fundación velas y faroles es una organización sin ánimo de lucro que pretende generar alternativas culturales y artísticas, para ayudar a afianzar nuestra identidad local, defender el patrimonio histórico, construir políticas culturales que garanticen la sostenibilidad del festival de velas y faroles a largo plazo, apoyamos en procesos educativos que permitan la recuperación de la confianza y credibilidad del ciudadana, lo que se reflejara en bienestar, organización y autogestión con un serio compromiso y respeto por el ambiente natural.</Text>
          </View>
          <View style={styles.containerLinks}>
            <Button title='Ver sitio web de la fundación velas y faroles' onPress={() => Linking.openURL('http://fundavelasfaroles.wixsite.com/velasyfaroles/festival')} />
            <Button title='Ver sitio web de la alcaldía de Quimbaya' onPress={() => Linking.openURL('http://www.quimbaya-quindio.gov.co/')} />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default WhoWeAre;

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
  containerLinks: {
    marginTop: 40,
  },
});