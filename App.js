import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './component/navigations/index.js'; // 👈 Importa tu stack de navegación

import {Login} from './component/screens/Login'; // Página del login
//import { Home } from './component/Home'; // Página después del login
//import {Header} from './component/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E11E3', // Cambiado a negro para evitar conflictos con el fondo de Main

    paddingHorizontal: 12,
  },
});