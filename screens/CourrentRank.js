/**
 * Rank actual de alumbrados segun votaciones de usuarios
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

class CourrentRank extends Component {
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
      <ScrollView>
        <ImageBackground
          source={require('../img/back_image.png')}
          style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.textRank}>#1</Text>
            <Text style={styles.textName}> - Barrio Clementina - </Text>
            <Image
              style={styles.Imagen}
              source={require('../img/clementina.png')}
            />
            <View style={styles.cotainerVotes}>
              <Text style={styles.textVotos}> Total Votos: 593 </Text>
              <TouchableOpacity
                style={styles.buttonVote}
                onPress={() => this.props.navigation.navigate('MapDetail')}>
                <Text style={styles.textButton}> Votar por este sector </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.textRank}>#2</Text>
            <Text style={styles.textName}> - Ciudadela Quimbaya - </Text>
            <Image
              style={styles.Imagen}
              source={require('../img/ciudadela.png')}
            />
            <View style={styles.cotainerVotes}>
              <Text style={styles.textVotos}> Total Votos: 430 </Text>
              <TouchableOpacity
                style={styles.buttonVote}
                onPress={() => this.props.navigation.navigate('MapDetail')}>
                <Text style={styles.textButton}> Votar por este sector </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.textRank}>#3</Text>
            <Text style={styles.textName}> - Barrio San José - </Text>
            <Image
              style={styles.Imagen}
              source={require('../img/san_jose.png')}
            />
            <View style={styles.cotainerVotes}>
              <Text style={styles.textVotos}> Total Votos: 240 </Text>
              <TouchableOpacity
                style={styles.buttonVote}
                onPress={() => this.props.navigation.navigate('MapDetail')}>
                <Text style={styles.textButton}> Votar por este sector </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default CourrentRank;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
    width: '100%',
    height: '100%',
  },
  cotainerVotes: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subContainer: {
    padding: 15,
    borderRadius: 15,
  },
  textRank: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textVotos: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    marginHorizontal: 10,
  },
  textButton: {
    color: '#FFCC00',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  Imagen: {
    width: 350,
    height: 180,
    resizeMode: 'stretch',
    borderColor: '#FFCC00',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 3,
    marginTop: 3,
  },
  buttonVote: {
    alignItems: 'center',
    backgroundColor: '#3366CC',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFCC00',
    marginHorizontal: 10,
    padding: 2,
  },
});