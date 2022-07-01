import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Validation from './src/screens/Validation';

const App = () => {
  return (
    <View style={styles.root}>
      <Validation />
    </View>

  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#b3c7e8"
  }
})

export default App