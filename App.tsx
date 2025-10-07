import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'
import { useFonts } from 'expo-font'
import { TEMA_CLARO, TEMA_OSCURO } from './themes/Temas'

export default function App() {

  let temaActivo = useColorScheme()
  let tema = null
  if(temaActivo=="dark"){
    tema = TEMA_OSCURO
  }else{
    tema = TEMA_CLARO
  }

  const COLOR_FONDO=tema.colorFondo
  const COLOR_TITULO=tema.colorTitulo
  const COLOR_TEXTO_FOTO=tema.colorTextoFoto
  useFonts({
    "bebasNeue": require("./assets/BebasNeue-Regular.ttf")
  })

  return (
    <View style={[styles.contenedorPrincipal, {backgroundColor:COLOR_FONDO}]}>
      <ScrollView>
        <Image
        source={tema.logo}
        contentFit="cover"
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
          <Text style={[styles.titulo, {color:COLOR_TITULO}]}>Los mejores alojamientos</Text>
          <View style={styles.contenedorFotosAlojamiento}>
            <View style={styles.contenedorAlojamiento}>
              <Image 
              source={require("./assets/alojamiento1.jpg")}
              contentFit='contain'
              style={styles.fotoAlojamiento}
              />
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image 
              source={require("./assets/alojamiento2.jpg")}
              contentFit='contain'
              style={styles.fotoAlojamiento}
              />
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image 
              source={require("./assets/alojamiento3.jpg")}
              contentFit='contain'
              style={styles.fotoAlojamiento}
              />
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image 
              source={require("./assets/alojamiento4.jpg")}
              contentFit='contain'
              style={styles.fotoAlojamiento}
              />
            </View>
          </View>
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
    //he intentado que se vea la sombra subiendole la opacidad pero nada no consigo que se vea
    shadowColor: "#000",
    shadowOffset: {
	  width: 2,
	  height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3.84,

    elevation: 5,
    },
    contenedorFotosAlojamiento:{
      flex:1,
      flexDirection:"row",
      flexWrap:"wrap",
      gap:5,
      justifyContent:"space-between",
      marginBottom:15
    },
    fotoAlojamiento:{
      width:"100%",
      height:"100%"
    },
    contenedorAlojamiento:{
      width:"49%",
      aspectRatio:1
    }
  }
)