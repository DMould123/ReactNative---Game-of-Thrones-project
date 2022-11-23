import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
function Home() {
  const [isLoaded, setIsLoaded] = useState(true)
  const [myCharacters, setMyCharacters] = useState([])

  const getUserData = async () => {
    try {
      const response = await fetch('https://thronesapi.com/api/v2/Characters')
      const gotData = await response.json()
      setMyCharacters(gotData)
      setIsLoaded(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserData()
  })

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}></View>

        <View>
          <View style={styles.characterContainer}>
            <Image style={styles.imgStyle} source={{ uri: item.imageUrl }} />
          </View>

          <View style={styles.gameCharacterContainer}>
            <Text style={styles.gameCharacter}> Name: {item.fullName} </Text>
            <Text style={styles.gameCharacter}> Title: {item.title} </Text>
            <Text style={styles.gameCharacter}> Family: {item.family} </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Image
        source={{
          uri: 'https://www.netclipart.com/pp/m/79-793640_game-of-thrones-clipart-logo-game-of-thrones.png'
        }}
        style={styles.mainHeader}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={myCharacters}
        renderItem={showUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20
  },
  characterContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    padding: 10,
    fontSize: 20,
    color: '#fff'
  },
  mainHeader: {
    padding: 100,
    width: 400,
    height: 150
  },

  imageContainer: {},
  imgStyle: {
    width: '100%',
    height: 400
  },
  gameCharacterContainer: {
    backgroundColor: '#353535'
  },
  gameCharacter: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 0,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    padding: 1
  }
})
export default Home
