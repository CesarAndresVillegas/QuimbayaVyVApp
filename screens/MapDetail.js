/**
 * Detalle de un alumbrado seleccionado en el mapa
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';

class MapDetail extends Component {
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

  constructor() {
    super();
    this.state = {
      Default_Rating: 2,
      Max_Rating: 5
    }
    this.Star = 'https://raw.githubusercontent.com/Monte9/react-native-ratings/master/src/images/airbnb-star-selected.png';
    this.Star_With_Border = 'https://raw.githubusercontent.com/Monte9/react-native-ratings/master/src/images/airbnb-star.png';
  }

  UpdateRating(key) {
    this.setState({ Default_Rating: key });
  }

  render() {
    let React_Native_Rating_Bar = [];
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={(i <= this.state.Default_Rating) ? { uri: this.Star } : { uri: this.Star_With_Border }} />
        </TouchableOpacity>
      );
    }
    return (
      <ImageBackground
        source={require('../img/back_image.png')}
        style={styles.container}>
        <View>
          <Text style={styles.textRank}>Alcaldía de Quimbaya</Text>
          <Text style={styles.textName}> - Homenaje a los fundadores del municipio de Quimbaya - </Text>
          <Image
            style={styles.Imagen}
            source={require('../img/clementina.png')}
          />
        </View>
        <View style={styles.childView}>
          {
            React_Native_Rating_Bar
          }
        </View>
        <Text style={styles.textStyle}>
          {this.state.Default_Rating} / {this.state.Max_Rating}
        </Text>
        <TouchableOpacity style={styles.buttonVote}>
          <Text style={styles.textButton}>Votar</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default MapDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#003366',
    width: '100%',
    height: '100%',
  },
  textRank: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '5%',
  },
  textName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textButton: {
    color: '#FFCC00',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  Imagen: {
    width: 350,
    height: 180,
    resizeMode: 'stretch',
    borderColor: '#FFCC00',
    borderWidth: 2,
    borderRadius: 15,
    margin: '5%',
  },
  buttonVote: {
    width: '80%',
    height: 35,
    backgroundColor: '#3366CC',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFCC00',
    marginTop: '5%',
    justifyContent: 'center',
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: '1%',
  },
  StarImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: 'white',
  },
});