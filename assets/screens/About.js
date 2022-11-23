import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

function About() {
  const [Sentence, setSentence] = useState('Quote Loading')
  const [Character, setCharacter] = useState('Quote Loading...')
  const [isLoading, setIsLoading] = useState(false)

  const fetchRandom = () => {
    setIsLoading(true)
    fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random').then(
      (response) =>
        response.json().then((result) => {
          //console.log(result.sentence)
          setSentence(result.sentence)
          setCharacter(result.character.name)
          setIsLoading(false)
        })
    )
  }

  useEffect(() => {
    fetchRandom()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.quote}>
        <Text style={styles.text}>Game of Thrones Series Quote</Text>
        <FontAwesome5 name={'quote-left'} style={styles.icon}></FontAwesome5>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            lineHeight: 30,
            letterSpacing: 1.2,
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30
          }}
        >
          {Sentence}
        </Text>
        <FontAwesome5
          name={'quote-right'}
          style={{
            fontSize: 18,
            color: 'black',
            textAlign: 'right',
            marginTop: -24,
            marginBottom: 24
          }}
        ></FontAwesome5>
        <Text
          style={{ textAlign: 'center', fontSize: 18, fontStyle: 'italic' }}
        >
          -- {Character}
        </Text>
        <View>
          <TouchableOpacity onPress={fetchRandom} style={styles.button}>
            <Text style={{ fontSize: 18, textAlign: 'center' }}>
              {isLoading ? 'Quote Loading...' : 'New Quote'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },

  quote: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20
  },

  text: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20
  },

  button: {
    backgroundColor: 'gold',
    padding: 20,
    marginVertical: 20,
    borderRadius: 25,
    alignItems: 'center'
  },
  icon: {
    fontSize: 18,
    color: 'black',
    marginBottom: -15
  }
})

export default About
