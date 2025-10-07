import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'
import { useFonts } from 'expo-font'

export default function App() {
  const COLOR_FONDO="#121212"
  const COLOR_TITULO="#ffdd99"
  const COLOR_TEXTO_FOTO="#ffffff"
  useFonts({
    "bebasNeue": require("./assets/BebasNeue-Regular.ttf")
  })

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
          <Text style={[styles.titulo, {color:COLOR_TITULO}]}>
            Las mejores rutas
          </Text>
          <ImageBackground 
            source={require("./assets/mejores1.jpg")}
            contentFit='contain'
            style={styles.fotoRuta}
          >
            <Text style={[styles.textoFoto, {color:COLOR_TEXTO_FOTO}]}>Albaicín</Text>
          </ImageBackground>
          <ImageBackground 
            source={require("./assets/mejores2.jpg")}
            contentFit='contain'
            style={styles.fotoRuta}
          >
            <Text style={[styles.textoFoto, {color:COLOR_TEXTO_FOTO}]}>Sacromonte</Text>
          </ImageBackground>
          <ImageBackground 
            source={require("./assets/mejores3.jpg")}
            contentFit='contain'
            style={styles.fotoRuta}
          >
            <Text style={[styles.textoFoto, {color:COLOR_TEXTO_FOTO}]}>El centro</Text>
          </ImageBackground>
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
  },
  fotoRuta:{
    width:"100%",
    height:200,
    marginVertical: 5
  },
  textoFoto:{
    margin:"auto",
    fontSize:48,
    fontFamily:"bebasNeue",
    shadowColor: "#000",
    shadowOffset: {
	  width: 100,
	  height: 25,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    }
})