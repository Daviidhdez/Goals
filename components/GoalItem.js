import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

export default function GoalItem({ goal, onDeleteGoal }) {
    return (
        <Pressable
            android_ripple={{ color: "#6ABDA1" }}
            style={({ pressed }) => pressed && styles.pressedItem}
            onPress={() => {
                onDeleteGoal(goal.id)

            }}

        >
            <View style={styles.goalItem} >
                <Text style={styles.goalText}> {goal.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = new StyleSheet.create({
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
    },

    pressedItem: {
        opacity: 0.5
    }
})
