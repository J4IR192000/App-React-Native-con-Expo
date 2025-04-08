import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform} from 'react-native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import React, { useState } from 'react';

const icon = require('../../assets/react-native-1.png');

export function Login({ navigation }) {
  const insets = useSafeAreaInsets();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
  
    try {
      const response = await fetch('http://192.168.1.77/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }) // ← Enviamos los datos
      });
  
      const data = await response.json(); // ← Leemos la respuesta del servidor
  
      if (data.success) {
        Alert.alert('Bienvenido', `Hola ${data.username}`);
        navigation.navigate('Home'); // 👈 Esto cambia de pantalla
      } else {
        Alert.alert('Error', data.message || 'Credenciales incorrectas');
      }
  
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={10} // Puedes ajustar esto si tienes header
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1, backgroundColor: '#111r', width: '100%'}}>
          <View style={styles.container}>
            
              <Image source={icon} style={styles.image} />
              <Text style={styles.title}>Iniciar Sesión</Text>

              <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor="#888"
                value={username}
                onChangeText={setUsername}
              />

              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 180,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
