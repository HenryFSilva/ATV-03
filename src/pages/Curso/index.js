import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const logo = require('../../assets/imageviewer.png')
const logo1 = require('../../assets/imageviewer (1).png')
const logo2 = require('../../assets/imageviewer (2).png')

export default function Cursos() {

    const navigation = useNavigation();

    function dados() {
        navigation.navigate('Detalhes', { nomeCurso: 'PRIVACIDADE E PROTEÇÃO DE DADOS', image: logo2, descricao: 'O curso online Privacidade e Proteção de Dados (LGPD) traz, ao público em geral, as principais diretrizes da Lei Geral de Proteção de Dados nº 13.709/2018, que regulamenta o tratamento de dados pessoais que as organizações realizam em suas diversas atividades, tanto em meios físicos quanto eletrônicos, a fim de proteger os dados dos titulares, garantindo sua privacidade.' });
    }
    function excel() {
        navigation.navigate('Detalhes', { nomeCurso: 'EXCEL BÁSICO', image: logo1, descricao: 'O curso Excel Básico tem como objetivo abordar as possibilidades para resolver problemas básicos de cálculos com fórmulas e aplicação de funções.' })
    }
    function trabalho() {
        navigation.navigate('Detalhes', { nomeCurso: 'PREPARAÇÃO PARA O MUNDO DO TRABALHO', image: logo, descricao: 'O curso apresenta estratégias que contribuem para inserção ou recolocação de jovens e adultos no mundo do trabalho, além dos desafios do mercado e as habilidades do profissional do futuro e dicas para se destacar em processos seletivos.' })
    }

    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>

            <ScrollView>
                <View>
                    <View style={styles.item}>
                        <TouchableOpacity style={[styles.botao]} onPress={dados}>
                            <Text style={styles.buttonText}>PRIVACIDADE E PROTEÇÃO DE DADOS</Text>
                        </TouchableOpacity>
                        <Image style={{ width: 200, height: 210, marginBottom: 30, left: 75, marginTop: 10 }} source={logo2}></Image>
                    </View>

                    <View style={styles.item}>
                        <TouchableOpacity style={[styles.botao]} onPress={excel}>
                            <Text style={styles.buttonText}>EXCEL BÁSICO</Text>
                        </TouchableOpacity>
                        <Image style={{ width: 200, height: 210, marginBottom: 30, left: 75, marginTop: 10 }} source={logo1}></Image>
                    </View>

                    <View style={styles.item}>
                        <TouchableOpacity style={[styles.botao]} onPress={trabalho}>
                            <Text style={styles.buttonText}>PREPARAÇÃO PARA O MUNDO DO TRABALHO</Text>
                        </TouchableOpacity>
                        <Image style={{ width: 200, height: 210, marginBottom: 30, left: 75, marginTop: 10 }} source={logo}></Image>
                    </View>
                </View>
                <StatusBar style="light" />

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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    item: {
        marginBottom: 30,
    },
    botao: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
