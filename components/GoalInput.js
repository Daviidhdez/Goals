
import { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';

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
                <Image source={require("../assets/img/goal.png")} style={styles.goalImg} />
                <TextInput
                    onChangeText={textChangeHandler}
                    style={styles.textInput}
                    value={newGoal}
                    placeholder='Input your Goal'
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            color={'#FF0303'}
                            title='Cancel'
                            onPress={() => onCancel()}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            color={'#025F40'}
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
        alignItems: "center",
        backgroundColor: '#77B496'
    },

    textInput: {
        borderColor: "green",
        backgroundColor: "#ACD176",
        color: '#16471E',
        borderRadius: 15,
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
    },

    goalImg: {
        width: 150,
        height: 150,
        margin: 20
    }

})