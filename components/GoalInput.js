
import { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function GoalInput({ onNewGoal }) {

    const [newGoal, setNewGoal] = useState("");

    function textChangeHandler(enteredText) {
        setNewGoal(enteredText);
    }

    function onPressHandler() {
        if (newGoal) {
            onNewGoal(newGoal)
        }
        setNewGoal("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={textChangeHandler}
                style={styles.textInput}
                value={newGoal}
                placeholder='Input your Goal'
            />

            <Button
                title='Add Goal'
                onPress={onPressHandler} />
        </View>
    )
}

const styles = new StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomWidth: 2,
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
    }
})