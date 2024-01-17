import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  //Declaramos el hook de estado de componente "newGoal"
  const [newGoal, setNewGoal] = useState("");

  const [myGoals, setMyGoals] = useState([]);

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function addGoalHandler() {
    setMyGoals(myCurrentGoals => [...myCurrentGoals, newGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={textChangeHandler} style={styles.textInput} placeholder='Input your Goal' />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {myGoals.map((goal, i) => {
          return (
            <View key={i}>
              <Text>{goal}</Text>
            </View>
          )
        })}

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

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#076C4C",
    paddingBottom: 20,
    alignItems: "center"

  },

  textInput: {
    borderColor: "green",
    backgroundColor: "#ACD176",
    borderWidth: 1,
    fontWeight: "bold",
    fontSize: 17,
    width: "70%",
    padding: 10
  },

  goalsContainer: {
    flex: 5,
  }
})