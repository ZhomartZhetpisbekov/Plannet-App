import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity style={styles.square}/>
                <Text style={styles.taskTitle}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    taskContainer: {
        padding: 15,
        backgroundColor: '#e3e8e8',
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    taskTitle: {},
    circular: {
        width: 15,
        height: 15,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 50
    },
    
});

export default Task;