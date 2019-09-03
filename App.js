import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalsItem from './components/GoalsItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals([...courseGoals, {
      //key: Math.random().toString(), // Get the key automate
      id: Math.random().toString(),
      value: goalTitle
    }])
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(courseGoals.filter(goal => goal.id !== goalId))
  }

  return (
    <View style={styles.screen}>
      <GoalInput 
        onAddGoal={addGoalHandler}
      />
      <FlatList 
        data={courseGoals}
        renderItem={ itemData => (
          <GoalsItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            item={itemData.item.value}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
