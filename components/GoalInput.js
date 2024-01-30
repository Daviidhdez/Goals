
import { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

export default function GoalInput({ onNewGoal, visible, onCancel }) {

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
        <Modal
            visible={visible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={textChangeHandler}
                    style={styles.textInput}
                    value={newGoal}
                    placeholder='Input your Goal'
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={() => onCancel()}
                        />
                    </View>
                    <View style={styles.button}>

                        <Button
                            title='Add Goal'
                            onPress={onPressHandler}
                        />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = new StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
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
        width: "85%",
        padding: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: "space-between",

    },

    button: {
        width: '30%',
        paddingLeft: 20,
    }

})