import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';



export default function App() {

  //Declaramos el hook de estado de componente "newGoal"

  const [myGoals, setMyGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);



  function addGoalHandler(newGoalText) {
    setMyGoals(myCurrentGoals => [...myCurrentGoals,
    {
      id: Date.now(),
      text: newGoalText,
    }]);

  }

  function onDeleteGoalHundler(id) {
    setMyGoals((myCurrentGoals) => {
      return myCurrentGoals.filter((goal) => goal.id != id)
    })
  }

  return (

    <>
      <StatusBar style='light' />

      <View style={styles.container}>

        <Button
          color={'#45500A'}
          title='Add New Goal'
          onPress={() => setModalVisible(true)}
        />

        <GoalInput
          onNewGoal={addGoalHandler}
          onCancel={() => setModalVisible(false)}
          visible={modalVisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={myGoals}
            renderItem={(dataItem) => (
              <GoalItem
                key={dataItem.item.id}
                goal={dataItem.item}
                onDeleteGoal={onDeleteGoalHundler} />
            )
            }
          />

        </View>
      </View>
    </>
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
    paddingTop: 20
  },

})