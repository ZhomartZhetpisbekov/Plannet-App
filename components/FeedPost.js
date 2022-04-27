import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FeedPost = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.postInfoContainer}>
                <View style={styles.infoLeftRight}>
                    <Image 
                        style={styles.postIcon}
                        source={require('../assets/feed-post-icon.png')}/>
                    <Text style={styles.postInfoText}>{props.name}</Text>
                    <Text style={styles.postInfoText}>*{props.hours}</Text>
                </View>
                <View style={styles.infoLeftRight}>
                    <Text style={styles.challengeName}>{props.challengeName}</Text>
                    <TouchableOpacity style={styles.aboutPostBtn}>
                        <Text style={styles.postInfoText}>
                            ...
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.postContainer}>
                <Image 
                    style={styles.profileImg}
                    source={props.profileImg}/>
                <Text style={styles.postText}>{props.postText}</Text>
            </View>
            
            <View style={styles.likesContainer}>
                <Text style={styles.likesNum}>{props.likesNum}</Text>
                <Image 
                    style={styles.likesImg}
                    source={require('../assets/heart-icon.png')}/>
            </View>

        </View>
    )
};

export default FeedPost;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#defafa',
        padding: 15,
        paddingBottom: 5,
        marginBottom: 1,
        // borderRadius: 15,
    },
    postInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    infoLeftRight: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 40,
        paddingBottom: 5,
    },
    postIcon: {
        marginRight: 5,
    },
    postInfoText: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginRight: 3,
    },
    challengeName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    aboutPostBtn: {
        paddingBottom: 7,
        marginLeft: 10,
        
    },
    postContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
    },
    profileImg: {
        width: 60,
        height: 60,
        marginRight: 7,
    },
    postText: {
        fontSize: 14,
    },
    likesContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    likesImg: {},
    likesNum: {
        marginLeft: 5,
    },
});