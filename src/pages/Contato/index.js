import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, ScrollView, Platform, Button, Alert } from 'react-native';

export default function Contato() {
    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
            <ScrollView>
            <View>
                <View style={[styles.container]}>
                    <Text style={styles.labelInput}>Nome</Text>
                    <TextInput placeholder='Digite seu nome' style={styles.input}></TextInput>
                    <Text style={styles.labelInput}>Email</Text>
                    <TextInput placeholder='Digite seu e-mail' style={styles.input} keyboardType='email-address'></TextInput>
                    <Text style={styles.labelInput}></Text>
                    <TextInput placeholder='Digite sua mensagem' style={styles.input2}></TextInput>
                </View>

                <View style={[styles.alinharBotao]}>
                    <Button title='ENVIAR' color='red' onPress={() => Alert.alert('MUITO BEM!', 'Sua mensagem foi enviada com sucesso!',
                        [
                            {
                                text: 'OK',
                                onPress: () => console.log('Botão OK pressionado')
                            }
                        ])}></Button>
                </View>
            </View>    

                <StatusBar style="light" />
            </ScrollView>
        </SafeAreaView>
    )
};
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
    input: {
        width: 300,
        height: 35,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'red',
    },
    input2:{
        width: 300,
        height: 120,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'red',
        textAlign: 'center'
    },
    labelInput: {
        fontSize: 18,
        marginBottom: 1,
        marginBottom: 5,
        marginTop: 70,
        fontWeight: 'bold',
    },
    alinharBotao: {
        width: 150,
        gap: 10,
        marginTop: 50,
        borderWidth: 2,
        borderRadius: 10,
        left: 89   
    },
});