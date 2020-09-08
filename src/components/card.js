import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49

export const Card = ({ pic, title, caption }) => (
  <View style={styles.container}>
    <Tile
      imageSrc={{uri: pic}}
      imageContainerStyle={styles.imageContainer}
      activeOpacity={0.9}
      title={title}
      titleStyle={styles.title}
      caption={caption}
      captionStyle={styles.caption}
      containerStyle={styles.container}
      featured
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6a6a6a',
  },
  imageContainer: {
    width: Layout.window.width - 30,
    height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
    borderRadius: 20,
    overflow: 'hidden',
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 40,
    fontWeight: 'bold',
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
})