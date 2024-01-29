import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function GoalItem({ goal }) {
    return (
        <View style={styles.goalItem} >
            <Text style={styles.goalText}> {goal.text}</Text>
        </View>
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
    }
})
