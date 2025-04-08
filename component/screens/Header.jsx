import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

const icon = require('../assets/react-native-1.png'); // Requiere la imagen del icono de la app (local en assets)

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    height: 100, // Tamaño fijo para el encabezado
    width: '100%', // Ocupa todo el ancho de la pantalla
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Cambiado a 'contain' para ajustar mejor la imagen
    display: 'flex',
  },
});