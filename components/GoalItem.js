import React from 'react'

export default function GoalItem() {
    return (
        <View style={styles.goalItem} key={dataItem.item.id}>
            <Text style={styles.goalText} > {dataItem.item.text}</Text>
        </View>
    )
}

const styles = new StyleSheet.create({

})
