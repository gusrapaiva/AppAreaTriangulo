import React, {useState} from 'react';

import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';



export default function App() {

function CalculoCombustivel(){
  alert('A área do seu triângulo é de '+resultado+'m²')
}

  const [base, setBase] = useState('');
  const [altura, setAlt] = useState('');
  const resultado = base*altura/2;


  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.imgcx}> 
        <Image source={require('./components/triangulo.png')} style={styles.img} />
      </View>

      <Text style={styles.titulo}>
        Calcular Área do Triângulo
      </Text>

      <TextInput style={styles.input}
        onChangeText={(base)=>setBase(base)}
        placeholder="Digite a altura (em metros)."
        placeholderTextColor='#000' keyboardType='numeric'
      />
      <TextInput style={styles.input}
        onChangeText={(altura)=>setAlt(altura)}
        placeholder="Digite a base (em metros)."
        placeholderTextColor='#000'
         keyboardType='numeric'
      />

      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel} >
        <Text style={styles.textobtn}> Calcular o Consumo 
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0091ff',
  },
  titulo: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    fontsize: 25,
    padding: 25,
    width: 350,
    color: '#000',
    backgroundColor: '#89c3f0',
    borderWidth: 1.5,
    borderColor: '#fff',
    borderRadius: 20,
    margin: 15,
    fontWeight: 400
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#154e7a',
    padding: 30,
    borderRadius: 20,
    marginTop: 50
  },
  textobtn: {
    fontsize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
    imgcx: {
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200
  }
});
