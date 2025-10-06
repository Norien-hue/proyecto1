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
  }
})