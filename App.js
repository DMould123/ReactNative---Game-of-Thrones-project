import React from 'react'
import HomeScreen from './assets/screens/Home'
import AboutScreen from './assets/screens/About'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: '#353535' }}
        activeColor="white"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen} //Home Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            )
          }}
        />
        <Tab.Screen
          name="Quotes"
          component={AboutScreen} // About Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shuffle" color={color} size={28} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
