import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';

export default function App() {

  //Declaramos el hook de estado de componente "newGoal"

  const [myGoals, setMyGoals] = useState([]);

  function addGoalHandler(newGoalText) {
    setMyGoals(myCurrentGoals => [...myCurrentGoals,
    {
      id: Date.now(),
      text: newGoalText,
    }]);

  }

  return (

    <View style={styles.container}>
      <GoalInput onNewGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <View style={styles.goalItem} key={dataItem.item.id}>
              <Text style={styles.goalText} > {dataItem.item.text}</Text>
            </View>
          )
          }
        />

      </View>
    </View>

  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "#D5F8F3",
    paddingHorizontal: 15
  },



  goalsContainer: {
    flex: 5,
  },

  goalItem: {
    padding: 20,
    backgroundColor: "#0D3B35",
    borderWidth: 3,
    borderColor: "#F1ED89",
    marginBottom: 10,
    borderRadius: 14
  },

  goalText: {
    color: "white",
    fontSize: 17
  }

})