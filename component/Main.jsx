import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';

const icon = require('../assets/react-native-1.png'); // Requiere la imagen del icono de la app (local en assets)

export function Main() {
  const insets = useSafeAreaInsets(); // Obtén los márgenes seguros
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga
  const [text, setText] = useState(""); // Estado para el contenido del texto

  // Simula la carga del contenido
  useEffect(() => {
    setTimeout(() => {
      setText("Hola mundooo!"); // Establece el contenido del texto
      setIsLoading(false); // Finaliza la carga
    }, 2000); // Simula un retraso de 2 segundos
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1 }}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      ) : (
        <View style={styles.container}>
          <StatusBar style="light" />
          <Image source={icon} style={styles.image} />
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}>
            En un rincón del mundo donde el viento susurra historias olvidadas, una pequeña idea comenzó a crecer como una chispa en la oscuridad. No era grande, ni fuerte, pero tenía algo que lo cambiaba todo: intención.
          </Text>
        </View>
      )}
    </View>
  );
}

export function AnimatedText({ text }) {
    return (
        <Text style={styles.text}>
        {text}
        </Text>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#000  ',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'center',   
  },
  text: {
    fontSize: 20,
    color: 'white', // Cambiado a blanco para contrastar con el fondo gris
    fontWeight: 'bold',
    padding: 10,
  },
});