import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a la pantalla de inicio!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, color: 'black' },
});
