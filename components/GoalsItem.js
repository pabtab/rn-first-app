import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalsItem = ({id, item, onDelete}) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  }
})

export default GoalsItem
