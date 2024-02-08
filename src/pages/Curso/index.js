import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform } from 'react-native';

const logo = require('../../assets/imageviewer.png')
const logo1 = require('../../assets/imageviewer (1).png')
const logo2 = require('../../assets/imageviewer (2).png')

export default function Cursos() {
    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>

            <ScrollView>
                <View style={styles.centalizarImg}>
                    <Image style={{ width: 200, height: 210, marginTop: 0, }} source={logo}></Image>
                    <Text style={styles.titulo}>PREPARAÇÃO PARA O MUNDO DO TRABALHO</Text>
                    <Text style={styles.texto}>     O Curso Preparação para o Mundo do Trabalho tem por objetivo apresentar estratégias que contribuam para inserção ou recolocação de jovens e adultos no mundo do trabalho, por meio do reconhecimento do contexto contemporâneo e da importância do planejamento de carreira alinhado as habilidades pessoais. Curso gratuito, totalmente on-line.</Text>
                    <StatusBar style="light" />
                </View>

                <View style={styles.centalizarImg}>
                    <Image style={{ width: 200, height: 210, marginTop: 90, }} source={logo1}></Image>
                    <Text style={styles.titulo}>CURSO DE EXCEL BÁSICO</Text>
                    <Text style={styles.texto}>     O curso Excel Básico tem como objetivo abordar as possibilidades para resolver problemas básicos de cálculos com fórmulas e aplicação de funções.</Text>
                    <StatusBar style="light" />
                </View>

                <View style={styles.centalizarImg}>
                    <Image style={{ width: 200, height: 210, marginTop: 90, }} source={logo2}></Image>
                    <Text style={styles.titulo}>PRIVACIDADE E PROTEÇÃO DE DADOS (LGPD)</Text>
                    <Text style={styles.texto}>     O curso online Privacidade e Proteção de Dados (LGPD) traz, ao público em geral, as principais diretrizes da Lei Geral de Proteção de Dados nº 13.709/2018, que regulamenta o tratamento de dados pessoais que as organizações realizam em suas diversas atividades, tanto em meios físicos quanto eletrônicos, a fim de proteger os dados dos titulares, garantindo sua privacidade.</Text>
                    <StatusBar style="light" />
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
        padding: 10,
    },
    centalizarImg: {
        alignItems: 'center',
    },
    titulo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        fontSize: 15,
    },
})