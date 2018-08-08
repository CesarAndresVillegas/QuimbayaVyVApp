/**
 * Aplicación velas y faroles
 * César A. Villegas T.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import MainMenu from './screens/MainMenu';
import MapRoute from './screens/MapRoute';
import MapRoute7 from './screens/MapRoute7';
import MapRoute8 from './screens/MapRoute8';
import MapDetail from './screens/MapDetail';
import CourrentRank from './screens/CourrentRank';
import EmergencyCalls from './screens/EmergencyCalls';
import PrevWinner from './screens/PrevWinner';
import WhoWeAre from './screens/WhoWeAre';
import Schedule from './screens/Schedule';
import Recommendations from './screens/Recommendations';
import ScheduleDetail from './screens/ScheduleDetail';
import Judges from './screens/Judges';
import MapMenu from './screens/MapMenu';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = new StackNavigator({
  MainMenu: {screen: MainMenu},
  MapRoute: {screen: MapRoute},
  MapRoute7: {screen: MapRoute7},
  MapRoute8: {screen: MapRoute8},
  MapDetail: {screen: MapDetail},
  CourrentRank: {screen: CourrentRank},
  EmergencyCalls: {screen: EmergencyCalls},
  PrevWinner: {screen: PrevWinner},
  WhoWeAre: {screen: WhoWeAre},
  Schedule: {screen: Schedule},
  Recommendations: {screen: Recommendations},
  ScheduleDetail: {screen: ScheduleDetail},
  Judges: {screen: Judges},
  MapMenu: {screen: MapMenu},
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
