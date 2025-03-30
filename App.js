import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity,Pressable } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image  source={icon} style={
        {width: 200, 
        height:100,
        resizeMode: 'center',
        }} />
      <Text>Hola mundooo!</Text>
      <Button title="Soy un boton" onPress={() => alert('Hola')}  />
        
      <TouchableHighlight 
        underlayColor={'yellow'}
        onPress={() => alert('Hola')}
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
          width: 200,
        }}
        >
        <Text>Soy un boton con estilos</Text>
      </TouchableHighlight>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => alert('Hola')}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
          width: 200,
        }}
        >
        <Text>Soy un boton con estilos</Text>
      </TouchableOpacity>
        
      <Pressable
          onPress={() => {
            
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={{
              fontSize: pressed ? 30 : 20,
            }}>{pressed ? 'Soy el boton mas editable!' : 'Presioname'}</Text>
          )}
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
