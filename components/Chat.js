import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Chat = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.profileImg}
                source={props.profileImg}
            />

            <View style={styles.chatContainer}>
                <View style={styles.chatInfo}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.time}>{props.time}</Text>
                </View>

                <Text style={styles.chatText}>{props.text}</Text>
            </View>
        </View>
    )
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#b6dbd8',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    profileImg: {
        width: 60,
        height: 60,
    },
    chatContainer: {
        // borderWidth: 1,
        width: '80%',
    },
    chatInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        color: 'gray',
    },
    chatText: {},
});