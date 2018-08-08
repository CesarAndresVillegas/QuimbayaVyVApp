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

class Judges extends Component {
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
                        source={require('../img/escudo_quimbaya.png')}
                    />
                    <View style={styles.subContainer}>
                        <View style={styles.row}>
                            <View style={styles.tile}>
                                <Image
                                    style={styles.judegePicture}
                                    source={require('../img/img1.png')}
                                />
                                <Text style={styles.nameText}>Victor Mallarino</Text>
                                <Text style={styles.profileText}>Actor y director de teatro</Text>
                            </View>
                            <View style={styles.tile}>
                                <Image
                                    style={styles.judegePicture}
                                    source={require('../img/img2.png')}
                                />
                                <Text style={styles.nameText}>Helena Mallarino</Text>
                                <Text style={styles.profileText}>Actriz</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.tile}>
                                <Image
                                    style={styles.judegePicture}
                                    source={require('../img/img3.png')}
                                />
                                <Text style={styles.nameText}>Jaime A. Pérez C.</Text>
                                <Text style={styles.profileText}>Alcalde de Quimbaya</Text>
                            </View>
                            <View style={styles.tile}>
                                <Image
                                    style={styles.judegePicture}
                                    source={require('../img/img4.png')}
                                />
                                <Text style={styles.nameText}>Yerry F. Mina</Text>
                                <Text style={styles.profileText}>Futbolista Colombiano</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.tile}>
                                <Image
                                    style={styles.judegePicture}
                                    source={require('../img/img5.png')}
                                />
                                <Text style={styles.nameText}>Andrés F. Barrera P.</Text>
                                <Text style={styles.profileText}>Ing. de sistemas - PMP</Text>
                            </View>
                            <View style={styles.tile}>
                                <Image
                                    style={styles.judegePicture}
                                    source={require('../img/img6.png')}
                                />
                                <Text style={styles.nameText}>César A. Villegas T.</Text>
                                <Text style={styles.profileText}>Msc. Ing. Software</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default Judges;

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
    logoQuimbaya: {
        marginTop: '5%',
        width: 50,
        height: 60,
        resizeMode: 'stretch',
    },
    judegePicture: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 35,
    },
    nameText: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    profileText: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
    },
});