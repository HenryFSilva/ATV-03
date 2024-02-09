import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform } from 'react-native';

const logo = require('../../assets/SENAI.png')

export default function Inicio() {
  return (

    <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
      <ScrollView>

        <View style={styles.card}>
          <View style={styles.centalizarImg}>
            <Image style={{ width: 200, height: 50, marginTop: 20, }} source={logo}></Image>

            <Text style={styles.text}>ALUNO: Henry Silva</Text>
            <Text style={styles.text1}>Sumaré, 07/02/2024</Text>
            <Text style={styles.text1}>Escola SENAI Celso Charuri</Text>
            <Text style={styles.text1}>CURSO:Técnico em Desenvolvimento de Sistemas</Text>
            <Text style={styles.text1}>CURRICULAR:INDMO-Interface para Dispositivos Móveis</Text>

            <StatusBar style="black" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'Gray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3,
    },
    marginTop: 150
  },
  centalizarImg: {
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
  },
  text1: {
    marginTop: 15,
    alignItems:'center',
    textAlign: 'center',
  }
});