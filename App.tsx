import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

export default function App() {
  const COLOR_FONDO="#121212"
  const COLOR_TITULO="#ffdd99"
  const COLOR_TEXTO_FOTO="#ffffff"
  return (
    <View style={[styles.contenedorPrincipal, {backgroundColor:COLOR_FONDO}]}>
      <ScrollView>
        <Image
        source={require("./assets/granada_light.jpg")}
        contentFit="contain"
        style={styles.granada}
        />
        <View style={styles.contenedorSecundario}>
          <Text style={[styles.titulo, {color:COLOR_TITULO}]}>
            ¿Qué hacer en Granada?
          </Text>
          <ScrollView horizontal={true}>
            <Image
            source={require("./assets/actividad1.jpg")}
            contentFit="contain"
            style={styles.fotoCarrusel}
          />
          <Image
            source={require("./assets/actividad2.jpg")}
            contentFit="contain"
            style={styles.fotoCarrusel}
          />
          <Image
            source={require("./assets/actividad3.jpg")}
            contentFit="contain"
            style={styles.fotoCarrusel}
          />
          <Image
            source={require("./assets/actividad4.jpg")}
            contentFit="contain"
            style={styles.fotoCarrusel}
          />
          <Image
            source={require("./assets/actividad5.jpg")}
            contentFit="contain"
            style={styles.fotoCarrusel}
          />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal:{
    flex:1
  },
  granada:{
    width:"100%",
    height:250
  },
  contenedorSecundario:{
    flex:1,
    marginHorizontal: 10,
    padding: 5
  },
  titulo:{
    fontSize: 24,
    fontWeight: "bold"
  },
  fotoCarrusel:{
    width:250,
    height:300,
    margin:10,
    borderRadius:10
  }
})