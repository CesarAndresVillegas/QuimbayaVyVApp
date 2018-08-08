/**
 * Detalle de programación
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';

class ScheduleDetail extends Component {
  static navigationOptions = {
    title: 'Programación',
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
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    if (day > 8 && month == 12 && year == 2018) {
      body = <Text style={styles.informationText}>El evento terminó, pero lo invitamos a que el próximo año nos visite nuevamente junto a su familia y amigos, los esperamos con los brazos abiertos.</Text>
    }
    else {
      /* PROGRAMACIÓN DEL SABADO 8 DE DICIEMBRE */
      if (day <= 8 && month == 12 && year == 2018) {
        Alert.alert('8');
        body = <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
          <Text style={styles.dayText}>SÁBADO 8 DE DICIEMBRE</Text>
          <View style={styles.eventTitle}>
            <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
            <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
            <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
          </View>
        </View>
      }
      /* PROGRAMACIÓN DEL VIERNES 7 DE DICIEMBRE */
      if (day <= 7 && month == 12 && year == 2018) {
        Alert.alert('7');
        body = <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
          <Text style={styles.dayText}>VIERNES 7 DE DICIEMBRE</Text>
          <View style={styles.eventTitle}>
            <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
            <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
            <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
          </View>
        </View> + body
      }
      /* PROGRAMACIÓN DEL JUEVES 6 DE DICIEMBRE */
      if (day <= 6 && month == 12 && year == 2018) {
        Alert.alert('6');
        body = <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
          <Text style={styles.dayText}>JUEVES 6 DE DICIEMBRE</Text>
          <View style={styles.eventTitle}>
            <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
            <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
            <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
          </View>
        </View> + body
      }
      /* PROGRAMACIÓN DEL MIÉRCOLES 5 DE DICIEMBRE */
      if (day <= 5 && month == 12 && year == 2018) {
        Alert.alert('5');
        body = <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
          <Text style={styles.dayText}>MIÉRCOLES 5 DE DICIEMBRE</Text>
          <View style={styles.eventTitle}>
            <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
            <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
            <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
          </View>
        </View> + body
      }
      /* PROGRAMACIÓN DEL MARTES 4 DE DICIEMBRE */
      if (day <= 4 && month == 12 && year == 2018) {
        Alert.alert('4');
        body = <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
          <Text style={styles.dayText}>MARTES 4 DE DICIEMBRE</Text>
          <View style={styles.eventTitle}>
            <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
            <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
            <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
          </View>
        </View> + body
      }
      /* PROGRAMACIÓN DEL LUNES 3 DE DICIEMBRE */
      if (day <= 3 && month == 12 && year == 2018) {
        Alert.alert('3');
        body = <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
          <Text style={styles.dayText}>LUNES 3 DE DICIEMBRE</Text>
          <View style={styles.eventTitle}>
            <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
            <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
            <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
          </View>
        </View> + body
      }
      /* PROGRAMACIÓN DEL DOMINGO 2 DE DICIEMBRE */
      if (day <= 2 && month == 12 && year == 2018) {
        Alert.alert('2');
        body = <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
          <Text style={styles.dayText}>DOMINGO 2 DE DICIEMBRE</Text>
          <View style={styles.eventTitle}>
            <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
            <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
            <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
          </View>
        </View> + body
      }
      /* PROGRAMACIÓN DEL SÁBADO 1 DE DICIEMBRE */
      if (day <= 1 && month <= 12 && year == 2018) {
        Alert.alert('1');
        body = <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
          <Text style={styles.dayText}>SÁBADO 1 DE DICIEMBRE</Text>
          <View style={styles.eventTitle}>
            <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
            <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
            <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
          </View>
        </View> + body
      }
      /* PROGRAMACIÓN COMPLETA ANTES DEL PRIMERO DE DICIEMBRE */
      else if (month <= 12 && year == 2018) {
        body = <View>
          <View style={styles.dayContent} onLayout={this.ShowCurrentDate}>
            <Text style={styles.dayText}>SÁBADO 1 DE DICIEMBRE</Text>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>X Reinado Nacional del Café Real Gay</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Coliseo Cubierto Club de Leones</Text>
              <Text style={styles.eventContent}>Hora: 7:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Geovany (La Checha), Alcaldía Municipal de Quimbaya</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <Text style={styles.dayText}>DOMINGO 2 DE DICIEMBRE</Text>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>2a Ciclo travesía "Quimbaya tierra de luz"</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Salida: Parque principal</Text>
              <Text style={styles.eventContent}>Hora: 7:00 am</Text>
              <Text style={styles.eventContent}>Organiza: Concejo Municipal, Alcaldía Municipal</Text>
              <Text style={styles.eventContent}>Apoya: EDEQ, Alumbrado público, Fundación Velas y Faroles, Concejo Municipal</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Encendido oficial alumbrado navideño</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 6:30 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía Municipal</Text>
              <Text style={styles.eventContent}>Apoya: EDEQ, Alumbrado público, Fundación Velas y Faroles, Concejo Municipal</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>2do Festival Nacional de la Trova</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 7:30 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía Municipal de Quimbaya, Gustavo Rúa "El Orgejón"</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <Text style={styles.dayText}>LUNES 3 DE DICIEMBRE</Text>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Intercambio cultural Casa de la Cultura (Montenegro, Filandia)</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 4:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Subsecretaría de Educación, Cultura, Recreación y Deporte</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Concierto Rock Sinfónico</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 7:30 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía Municipal de Quimbaya</Text>
              <Text style={styles.eventContent}>Participan: Edén Musical, Banda sinfónica de la Tebaida, Esneider Marin</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <Text style={styles.dayText}>MARTES 4 DE DICIEMBRE</Text>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Jornada Deportiva y Recreativa</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Escenarios deportivos del municipio y Parque Bolivar</Text>
              <Text style={styles.eventContent}>Hora: 9:00 am</Text>
              <Text style={styles.eventContent}>Organiza: Secretaría de Servicios Sociales, Subsecretaría de Educación, Cultura, Recreación y Deporte</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Jornada de la Juventud</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 4:30 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía Municipal, Plataforma Juvenil</Text>
              <Text style={styles.eventContent}>Participa: La Mega</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <Text style={styles.dayText}>MIÉRCOLES 5 DE DICIEMBRE</Text>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Concierto Sonidos Mestizos (Folclor, Rock, Fusión)</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 5:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía de Quimbaya</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <Text style={styles.dayText}>JUEVES 6 DE DICIEMBRE</Text>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Presentación Escuela de Música de Quimbaya (Coros, Estudiantina, Banda Juvenil Musical, Tuna), Coro Carteros de la Noche I.E. Sadequi</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 3:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía municipal, Subsecretaría de Educación, Cultura, Recreación y Deporte</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Instalación de Alumbrados de Velas y Faroles</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Calles, parques y monumentos del municipio</Text>
              <Text style={styles.eventContent}>Hora: 6:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Fundación Velas y Faroles, Alcaldía de Quimbaya</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>4 Festival Internacional de Danza en Pareja</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 6:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía Municipal, Fundación Cultural Colonos</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Presentación Musical "Los Chimborrios" (Carranga Boyacense)</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 9:30 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía Municipal, Fundación Cultural Colonos</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <Text style={styles.dayText}>VIERNES 7 DE DICIEMBRE</Text>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Presentación Escuela de Música de Quimbaya (Coros, Estudiantina, Banda Juvenil Musical, Tuna), Grupo musical infantil Escuela Leonística de formación artística I.E. Simón Bolivar</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 3:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía municipal, Subsecretaría de Educación, Cultura, Recreación y Deporte</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Instalación de Alumbrados de Velas y Faroles</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Calles, parques y monumentos del municipio</Text>
              <Text style={styles.eventContent}>Hora: 6:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Fundación Velas y Faroles, Alcaldía de Quimbaya</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>4 Festival Internacional de Danza en Pareja</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 6:00 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía Municipal, Fundación Cultural Colonos</Text>
            </View>
          </View>
          <View style={styles.dayContent}>
            <View style={styles.eventTitle}>
              <Text style={styles.eventText}>Premiación Concurso de Alumbrados del Festival de Velas y Faroles 35 años</Text>
            </View>
            <View style={styles.subContent}>
              <Text style={styles.eventContent}>Lugar: Tarima principal</Text>
              <Text style={styles.eventContent}>Hora: 9:30 pm</Text>
              <Text style={styles.eventContent}>Organiza: Alcaldía de Quimbaya, Fundación Velas y Faroles</Text>
            </View>
          </View>
        </View>
      }
      else {
        body = <Text style={styles.informationText}>La programación del evento aún no ha sido publicada.</Text>
      }
    }

    return (
      <ImageBackground
        source={require('../img/back_image.png')}
        style={styles.container}>
        <ScrollView>
          {body}
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default ScheduleDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003366',
    width: '100%',
    height: '100%',
  },
  dayContent: {
    margin: '2%',
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    borderBottomWidth: 2,
  },
  eventTitle: {
    backgroundColor: '#3366CC',
    borderBottomColor: 'rgba(20, 20, 20, 0.8)',
    borderBottomWidth: 3,
  },
  subContent: {
    marginHorizontal: '1%',
    marginVertical: '1%',
  },
  dayText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: '1%',
  },
  eventContent: {
    color: 'white',
    fontSize: 14,
  },
  informationText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginHorizontal: '5%',
    marginTop: '10%',
  },
});