/**
 * Mapa del evento
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class MapRoute extends Component {
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

  onPressMarker(event) {
    const markerID = event.nativeEvent.i
    Alert.alert(
      'Aquí está usted',
      'Desea votar por este alumbrado como su favorito?',
      [
        { text: 'SI', onPress: () => this.props.navigation.navigate('MapDetail') },
        { text: 'NO', onPress: () => console.log('NO'), style: 'cancel' },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapContainer}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: 4.623523,
            longitude: -75.763384,
            latitudeDelta: 0.0135,
            longitudeDelta: 0.0135,
          }}
        >
          {/* ------------------- MARK WHERE ARE YOU ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.624304, longitude: -75.762869 }}
            title={"Usted está aqui"}
            description={"Votar por este alumbrado como su favorito"}
            onPress={(e) => this.onPressMarker(e)}
          />
          {/* ------------------- MARK INFO POINT ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.620373, longitude: -75.767678 }}
            title={"Punto de información"}
            image={require('../img/mapIcon1.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.627087, longitude: -75.767088 }}
            title={"Punto de información"}
            image={require('../img/mapIcon1.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.623294, longitude: -75.755965 }}
            title={"Punto de información"}
            image={require('../img/mapIcon1.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.621665, longitude: -75.765337 }}
            title={"Punto de información"}
            image={require('../img/mapIcon1.png')}
          />
          {/* ------------------- MARK PARKING ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.619701, longitude: -75.769025 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.620776, longitude: -75.766953 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.627591, longitude: -75.767897 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.625350, longitude: -75.764907 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.624955, longitude: -75.760352 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.622807, longitude: -75.757017 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.619214, longitude: -75.769951 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.624460, longitude: -75.765690 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.621758, longitude: -75.767880 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.622278, longitude: -75.759409 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.621069, longitude: -75.762061 }}
            title={"Parqueadero"}
            image={require('../img/mapIconP.png')}
          />
          {/* ------------------- MARK JEEP ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.619214, longitude: -75.769892 }}
            title={"Willys"}
            image={require('../img/mapIconJeep.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.627272, longitude: -75.767619 }}
            title={"Willys"}
            image={require('../img/mapIconJeep.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.623881, longitude: -75.755561 }}
            title={"Willys"}
            image={require('../img/mapIconJeep.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.625132, longitude: -75.761101 }}
            title={"Willys"}
            image={require('../img/mapIconJeep.png')}
          />
          {/* ------------------- MARK INTERM ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.617611, longitude: -75.769943 }}
            title={"Intermunicipal"}
            image={require('../img/mapIconTrans.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.623327, longitude: -75.767593 }}
            title={"Intermunicipal"}
            image={require('../img/mapIconTrans.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.628178, longitude: -75.769084 }}
            title={"Intermunicipal"}
            image={require('../img/mapIconTrans.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.623780, longitude: -75.754996 }}
            title={"Intermunicipal"}
            image={require('../img/mapIconTrans.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.621531, longitude: -75.764377 }}
            title={"Intermunicipal"}
            image={require('../img/mapIconTrans.png')}
          />
          {/* ------------------- MARK PMU ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.621439, longitude: -75.763257 }}
            title={"PMU"}
            image={require('../img/mapIconPmu.png')}
          />
          {/* ------------------- MARK PARQUE BOLIVAR ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.6221353, longitude: -75.7643852 }}
            title={"Parque Bolivar"}
            image={require('../img/mapIcon2.png')}
          />
          {/* ------------------- MARK CAM ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.622857, longitude: -75.760495 }}
            title={"CAM"}
            image={require('../img/mapIcon3.png')}
          />
          {/* ------------------- MARK PARQUE DE LA ESTACIÓN ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.624158, longitude: -75.761076 }}
            title={"Parque de la Estación"}
            image={require('../img/mapIcon4.png')}
          />
          {/* ------------------- MARK PARQUE GAITAN ------------------------------ */}
          <MapView.Marker
            coordinate={{ latitude: 4.622320, longitude: -75.758314 }}
            title={"Parque Gaitán"}
            image={require('../img/mapIcon5.png')}
          />
          <MapView.Marker
            coordinate={{ latitude: 4.620507, longitude: -75.7687134 }}
            title={"Monumento de la madre"}
            image={require('../img/mapIcon6.png')}
          />
          {/* ------------------- ------------------- ----------------------------- */}
          {/* ------------------- MAPA RUTA PEATONAL ------------------------------ */}
          {/* ------------------- CINCUENTENARIO ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.620025, longitude: -75.768881 },
              { latitude: 4.620703, longitude: -75.769532 },
              { latitude: 4.620688, longitude: -75.770053 },
              { latitude: 4.621366, longitude: -75.770096 },
              { latitude: 4.621453, longitude: -75.770690 },
              { latitude: 4.621309, longitude: -75.770733 },
              { latitude: 4.621049, longitude: -75.770444 },
              { latitude: 4.621078, longitude: -75.769546 },
              { latitude: 4.620703, longitude: -75.769532 },
              { latitude: 4.621078, longitude: -75.769546 },
              { latitude: 4.621107, longitude: -75.769271 },
              { latitude: 4.621323, longitude: -75.769040 },
              { latitude: 4.620991, longitude: -75.768823 },
              { latitude: 4.620544, longitude: -75.769344 },
              { latitude: 4.620991, longitude: -75.768823 },
              { latitude: 4.620674, longitude: -75.768620 },
              { latitude: 4.620299, longitude: -75.769141 },
              { latitude: 4.620674, longitude: -75.768620 },
              { latitude: 4.620530, longitude: -75.768316 },
              { latitude: 4.620212, longitude: -75.768302 },
              { latitude: 4.620530, longitude: -75.768316 },
              { latitude: 4.620559, longitude: -75.767824 },
            ]}
            strokeWidth={2}
            strokeColor="#003366" />
          {/* ------------------- ------------------- ----------------------------- */}
          {/* ------------------- MAPA RUTA PEATONAL ------------------------------ */}
          {/* ------------------- SIERRA OCHOA - PAZ ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621790, longitude: -75.765632 },
              { latitude: 4.621841, longitude: -75.766252 },
              { latitude: 4.621858, longitude: -75.766923 },
              { latitude: 4.621915, longitude: -75.767537 },
              { latitude: 4.621858, longitude: -75.766923 },
              { latitude: 4.622504, longitude: -75.766889 },
              { latitude: 4.622556, longitude: -75.767503 },
              { latitude: 4.622504, longitude: -75.766889 },
              { latitude: 4.621875, longitude: -75.760291 },
              { latitude: 4.622441, longitude: -75.766200 },
              { latitude: 4.623133, longitude: -75.766172 },
              { latitude: 4.623740, longitude: -75.766120 },
              { latitude: 4.623133, longitude: -75.766172 },
              { latitude: 4.623196, longitude: -75.766849 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621855, longitude: -75.766270 },
              { latitude: 4.622432, longitude: -75.766204 },
              { latitude: 4.623124, longitude: -75.766166 },
              { latitude: 4.623048, longitude: -75.765483 },
              { latitude: 4.622814, longitude: -75.762821 },
              { latitude: 4.622759, longitude: -75.762149 },
              { latitude: 4.622568, longitude: -75.760242 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.622498, longitude: -75.766887 },
              { latitude: 4.623184, longitude: -75.766854 },
              { latitude: 4.623810, longitude: -75.766788 },
              { latitude: 4.623184, longitude: -75.766854 },
              { latitude: 4.623213, longitude: -75.767402 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CARRERA 7 ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623704, longitude: -75.765428 },
              { latitude: 4.623415, longitude: -75.762102 },
              { latitude: 4.623362, longitude: -75.761459 },
              { latitude: 4.623276, longitude: -75.760804 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CARRERA 9 ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.625254, longitude: -75.767188 },
              { latitude: 4.624966, longitude: -75.763937 },
              { latitude: 4.624934, longitude: -75.763250 },
              { latitude: 4.624859, longitude: -75.762617 },
              { latitude: 4.624720, longitude: -75.761416 },
              { latitude: 4.624260, longitude: -75.760772 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CARRERA 9 REMIENDO ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.625226, longitude: -75.766249 },
              { latitude: 4.625673, longitude: -75.765624 },
              { latitude: 4.625796, longitude: -75.765606 },
              { latitude: 4.626156, longitude: -75.766328 },
              { latitude: 4.626108, longitude: -75.766667 },
              { latitude: 4.626169, longitude: -75.766729 },
              { latitude: 4.626581, longitude: -75.766689 },
              { latitude: 4.626862, longitude: -75.766544 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CALLE 12 ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621312, longitude: -75.760967 },
              { latitude: 4.621944, longitude: -75.760897 },
              { latitude: 4.622602, longitude: -75.760835 },
              { latitude: 4.623287, longitude: -75.760800 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CALLE 13 ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621971, longitude: -75.761531 },
              { latitude: 4.622672, longitude: -75.761539 },
              { latitude: 4.623322, longitude: -75.761478 },
              { latitude: 4.624541, longitude: -75.761328 },
              { latitude: 4.624734, longitude: -75.761399 },
              { latitude: 4.624945, longitude: -75.761284 },
              { latitude: 4.625357, longitude: -75.761275 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CALLE 14 PARTE 1----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621470, longitude: -75.762305 },
              { latitude: 4.622050, longitude: -75.762200 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CALLE 14 PARTE 2----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.622778, longitude: -75.762156 },
              { latitude: 4.623357, longitude: -75.762103 },
              { latitude: 4.624805, longitude: -75.761988 },
              { latitude: 4.625349, longitude: -75.761927 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CALLE 15----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621545, longitude: -75.762941 },
              { latitude: 4.622131, longitude: -75.762845 },
              { latitude: 4.622803, longitude: -75.762813 },
              { latitude: 4.623409, longitude: -75.762756 },
              { latitude: 4.625489, longitude: -75.762561 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CALLE 16----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621588, longitude: -75.763583 },
              { latitude: 4.622195, longitude: -75.763487 },
              { latitude: 4.622856, longitude: -75.763455 },
              { latitude: 4.623464, longitude: -75.763412 },
              { latitude: 4.625542, longitude: -75.763209 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CALLE 17----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621652, longitude: -75.764233 },
              { latitude: 4.622251, longitude: -75.764129 },
              { latitude: 4.622882, longitude: -75.764108 },
              { latitude: 4.623523, longitude: -75.764065 },
              { latitude: 4.624272, longitude: -75.763990 },
              { latitude: 4.625648, longitude: -75.763872 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- CALLE 18----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621725, longitude: -75.764935 },
              { latitude: 4.622314, longitude: -75.764827 },
              { latitude: 4.623019, longitude: -75.764817 },
              { latitude: 4.623618, longitude: -75.764752 },
              { latitude: 4.625714, longitude: -75.764548 },
              { latitude: 4.625763, longitude: -75.765187 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.624645, longitude: -75.760655 },
              { latitude: 4.624611, longitude: -75.759998 },
              { latitude: 4.624485, longitude: -75.758659 },
              { latitude: 4.624368, longitude: -75.757969 },
              { latitude: 4.624250, longitude: -75.757329 },
              { latitude: 4.624359, longitude: -75.757127 },
              { latitude: 4.624217, longitude: -75.755931 },
              { latitude: 4.624217, longitude: -75.755620 },
              { latitude: 4.624334, longitude: -75.755468 },
              { latitude: 4.624024, longitude: -75.755283 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623965, longitude: -75.760714 },
              { latitude: 4.623965, longitude: -75.760074 },
              { latitude: 4.623856, longitude: -75.759670 },
              { latitude: 4.623856, longitude: -75.759417 },
              { latitude: 4.623671, longitude: -75.757388 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623176, longitude: -75.757413 },
              { latitude: 4.624225, longitude: -75.757320 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623327, longitude: -75.760141 },
              { latitude: 4.626533, longitude: -75.759855 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.625341, longitude: -75.760579 },
              { latitude: 4.625165, longitude: -75.758769 },
              { latitude: 4.625266, longitude: -75.758567 },
              { latitude: 4.625593, longitude: -75.758482 },
              { latitude: 4.625828, longitude: -75.758508 },
              { latitude: 4.626290, longitude: -75.758659 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623184, longitude: -75.758760 },
              { latitude: 4.623839, longitude: -75.758710 },
              { latitude: 4.625199, longitude: -75.758600 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623906, longitude: -75.759400 },
              { latitude: 4.624485, longitude: -75.759325 },
              { latitude: 4.625106, longitude: -75.759257 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623201, longitude: -75.758070 },
              { latitude: 4.624074, longitude: -75.757994 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623201, longitude: -75.756714 },
              { latitude: 4.624250, longitude: -75.756647 },
              { latitude: 4.624880, longitude: -75.756521 },
              { latitude: 4.626147, longitude: -75.756386 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.624393, longitude: -75.757160 },
              { latitude: 4.624536, longitude: -75.757262 },
              { latitude: 4.625635, longitude: -75.757135 },
              { latitude: 4.626088, longitude: -75.757144 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.625023, longitude: -75.757144 },
              { latitude: 4.624922, longitude: -75.756529 },
              { latitude: 4.624922, longitude: -75.756184 },
              { latitude: 4.624871, longitude: -75.755847 },
              { latitude: 4.624846, longitude: -75.755687 },
              { latitude: 4.624662, longitude: -75.755535 },
              { latitude: 4.624670, longitude: -75.755451 },
              { latitude: 4.624334, longitude: -75.755300 },
              { latitude: 4.624250, longitude: -75.755401 },
              { latitude: 4.624015, longitude: -75.755274 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623377, longitude: -75.755998 },
              { latitude: 4.624166, longitude: -75.755939 },
              { latitude: 4.624838, longitude: -75.755864 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.625912, longitude: -75.758449 },
              { latitude: 4.626030, longitude: -75.758087 },
              { latitude: 4.625971, longitude: -75.757901 },
              { latitude: 4.625761, longitude: -75.757834 },
              { latitude: 4.625652, longitude: -75.757152 },
              { latitude: 4.625560, longitude: -75.755822 },
              { latitude: 4.625635, longitude: -75.755771 },
              { latitude: 4.625837, longitude: -75.755788 },
              { latitude: 4.625870, longitude: -75.755965 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621598, longitude: -75.764251 },
              { latitude: 4.620045, longitude: -75.764410 },
              { latitude: 4.619852, longitude: -75.764646 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621556, longitude: -75.763577 },
              { latitude: 4.620297, longitude: -75.763728 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621497, longitude: -75.762954 },
              { latitude: 4.620876, longitude: -75.763030 },
              { latitude: 4.620205, longitude: -75.763004 },
              { latitude: 4.619794, longitude: -75.763072 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621027, longitude: -75.764587 },
              { latitude: 4.620851, longitude: -75.762676 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.620339, longitude: -75.764326 },
              { latitude: 4.620264, longitude: -75.763712 },
              { latitude: 4.620180, longitude: -75.762996 },
              { latitude: 4.620247, longitude: -75.762752 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.625627, longitude: -75.763206 },
              { latitude: 4.626265, longitude: -75.763147 },
              { latitude: 4.626508, longitude: -75.763105 },
              { latitude: 4.626835, longitude: -75.762794 },
              { latitude: 4.626668, longitude: -75.762634 },
              { latitude: 4.626835, longitude: -75.762794 },
              { latitude: 4.626508, longitude: -75.763105 },
              { latitude: 4.626265, longitude: -75.763147 },
              { latitude: 4.626231, longitude: -75.762575 },
              { latitude: 4.626114, longitude: -75.762482 },
              { latitude: 4.625610, longitude: -75.762533 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621346, longitude: -75.761665 },
              { latitude: 4.620860, longitude: -75.761691 },
              { latitude: 4.620776, longitude: -75.761632 },
              { latitude: 4.620440, longitude: -75.761766 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.620776, longitude: -75.761413 },
              { latitude: 4.620541, longitude: -75.761455 },
              { latitude: 4.620322, longitude: -75.761573 },
              { latitude: 4.620071, longitude: -75.761674 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621271, longitude: -75.760992 },
              { latitude: 4.620750, longitude: -75.761042 },
              { latitude: 4.620230, longitude: -75.761135 },
              { latitude: 4.619953, longitude: -75.761219 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.620683, longitude: -75.760638 },
              { latitude: 4.620406, longitude: -75.760697 },
              { latitude: 4.620129, longitude: -75.760739 },
              { latitude: 4.619844, longitude: -75.760840 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621170, longitude: -75.760268 },
              { latitude: 4.620708, longitude: -75.760268 },
              { latitude: 4.620608, longitude: -75.760183 },
              { latitude: 4.620020, longitude: -75.760377 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.620633, longitude: -75.761649 },
              { latitude: 4.620541, longitude: -75.761446 },
              { latitude: 4.620457, longitude: -75.761101 },
              { latitude: 4.620364, longitude: -75.760268 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.620457, longitude: -75.761859 },
              { latitude: 4.620339, longitude: -75.761573 },
              { latitude: 4.620054, longitude: -75.760360 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.620171, longitude: -75.761876 },
              { latitude: 4.619852, longitude: -75.760857 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.620809, longitude: -75.761640 },
              { latitude: 4.620667, longitude: -75.760259 },
            ]}
            strokeWidth={2}
            strokeColor="#294F6E" />
          {/* ------------------- ------------------- ----------------------------- */}
          {/* ------------------- MAPA RUTA VEHICULAR ----------------------------- */}
          {/* ------------------- ------------------- ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.618085, longitude: -75.770016 },
              { latitude: 4.619475, longitude: -75.769468 },
              { latitude: 4.619956, longitude: -75.768814 },
              { latitude: 4.620266, longitude: -75.767956 },
              { latitude: 4.620587, longitude: -75.767720 },
              { latitude: 4.623913, longitude: -75.767419 },
              { latitude: 4.622587, longitude: -75.767555 },
              { latitude: 4.626843, longitude: -75.767167 },
              { latitude: 4.627078, longitude: -75.766867 },
              { latitude: 4.626169, longitude: -75.765247 },
              { latitude: 4.625710, longitude: -75.764560 },
              { latitude: 4.625314, longitude: -75.760601 },
              { latitude: 4.623282, longitude: -75.760783 },
              { latitude: 4.623036, longitude: -75.757458 },
              { latitude: 4.623250, longitude: -75.755977 },
              { latitude: 4.623902, longitude: -75.755280 },
              { latitude: 4.624672, longitude: -75.754443 },
            ]}
            strokeWidth={2}
            strokeColor="#FF6666" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623050, longitude: -75.756716 },
              { latitude: 4.622679, longitude: -75.756737 },
              { latitude: 4.622636, longitude: -75.757041 },
              { latitude: 4.622477, longitude: -75.757548 },
              { latitude: 4.622434, longitude: -75.758850 },
              { latitude: 4.622590, longitude: -75.760182 },
              { latitude: 4.621242, longitude: -75.760343 },
              { latitude: 4.621788, longitude: -75.765621 },
              { latitude: 4.621178, longitude: -75.765728 },
              { latitude: 4.620921, longitude: -75.765997 },
              { latitude: 4.620237, longitude: -75.767906 },
            ]}
            strokeWidth={2}
            strokeColor="#FF6666" />
          {/* ------------------- ------------------- ----------------------------- */}
          {/* ------------------- MAPA RUTA EVACUACIÓN ----------------------------- */}
          {/* ------------------- ------------------- ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.624410, longitude: -75.765321 },
              { latitude: 4.624260, longitude: -75.763980 },
              { latitude: 4.624196, longitude: -75.763347 },
              { latitude: 4.624142, longitude: -75.762692 },
              { latitude: 4.623971, longitude: -75.760793 },
            ]}
            strokeWidth={2}
            strokeColor="#2D882D" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621782, longitude: -75.765608 },
              { latitude: 4.622372, longitude: -75.765530 },
              { latitude: 4.623013, longitude: -75.765486 },
              { latitude: 4.626122, longitude: -75.765178 },
            ]}
            strokeWidth={2}
            strokeColor="#2D882D" />
          <MapView.Polyline
            coordinates={[
              { latitude: 4.623705, longitude: -75.765429 },
              { latitude: 4.623881, longitude: -75.766777 },
              { latitude: 4.623915, longitude: -75.767332 },
            ]}
            strokeWidth={2}
            strokeColor="#2D882D" />
          {/* ------------------- ------------------- ----------------------------- */}
          {/* ------------------- MAPA RUTA COMIDAS ----------------------------- */}
          {/* ------------------- ------------------- ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.621388, longitude: -75.761665 },
              { latitude: 4.621976, longitude: -75.761522 },
            ]}
            strokeWidth={4}
            strokeColor="#FF7600" />
          {/* ------------------- ------------------- ----------------------------- */}
          {/* ------------------- MAPA RUTA ARTESANIAS ----------------------------- */}
          {/* ------------------- ------------------- ----------------------------- */}
          <MapView.Polyline
            coordinates={[
              { latitude: 4.622086, longitude: -75.762209 },
              { latitude: 4.622744, longitude: -75.762165 },
            ]}
            strokeWidth={4}
            strokeColor="#F60057" />
        </MapView>
        <View style={styles.infoContainer}>
          <Image
            style={styles.mapInfoImage}
            source={require('../img/mapInfoHelp.png')}
          />
        </View>
      </View>
    );
  }
}

export default MapRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mapContainer: {
    width: '100%',
    height: '70%',
  },
  infoContainer: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    borderTopColor: 'black',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapInfoImage: {
    aspectRatio: 1.1,
    resizeMode: 'contain',
  },
});