import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Input your Goal' />
        <Button title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Your List of goals...</Text>
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCC",
    paddingBottom: 20,
    alignItems: "center"

  },

  textInput: {
    borderColor: "#CCCC",
    borderWidth: 1,
    width: "70%",
    padding: 10
  },

  goalsContainer: {
    flex: 5,
  }
})