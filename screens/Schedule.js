/**
 * Programación de las fiestas
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

class Schedule extends Component {
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
          <View style={styles.subContainer}>
            <View style={styles.row}>
              <View style={styles.tile}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
                  <Image source={require('../img/sabado1.png')} style={styles.tileImagen} />
                </TouchableOpacity>
              </View>
              <View style={styles.tile}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
                  <Image source={require('../img/domingo2.png')} style={styles.tileImagen} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.tile}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
                  <Image source={require('../img/lunes3.png')} style={styles.tileImagen} />
                </TouchableOpacity>
              </View>
              <View style={styles.tile}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
                  <Image source={require('../img/martes4.png')} style={styles.tileImagen} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.tile}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
                  <Image source={require('../img/miercoles5.png')} style={styles.tileImagen} />
                </TouchableOpacity>
              </View>
              <View style={styles.tile}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
                  <Image source={require('../img/jueves6.png')} style={styles.tileImagen} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.tile}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
                  <Image source={require('../img/viernes7.png')} style={styles.tileImagen} />
                </TouchableOpacity>
              </View>
              <View style={styles.tile}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScheduleDetail')}>
                  <Image source={require('../img/sabado8.png')} style={styles.tileImagen} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Schedule;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
    width: '100%',
    height: '100%',
  },
  subContainer: {
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  tile: {
    alignSelf: "flex-start",
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get('window').width) / 3,
    height: (Dimensions.get('window').height) / 6,
    margin: '5%',
  },
  tileText: {
    fontSize: 20
  },
  tileImagen: {
    borderRadius: 20,
    width: (Dimensions.get('window').width) / 3,
    height: (Dimensions.get('window').height) / 5,
    resizeMode: 'cover',
    borderColor: 'white',
    borderWidth: 1,
  },
});