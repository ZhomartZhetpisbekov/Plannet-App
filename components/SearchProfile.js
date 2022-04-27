import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SearchProfile = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.profileImg}
                source={props.profileImg}
            />

            <View style={styles.profileInfoContainer}>
                <View style={styles.profileHeaderContainer}>

                    <View style={styles.profileHeaderLeft}>
                        <Text style={styles.profileName}>{props.name}</Text>
                        <Text style={styles.friendsWith}>friends with Ben P. and 10 others</Text>
                    </View>

                    <View style={styles.profileHeaderRight}>
                        <TouchableOpacity style={styles.profileHeaderBtn}>
                            <Image 
                                style={styles.profileHeaderImg}
                                source={require('../assets/add-icon.png')}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={styles.profileAboutText}>{props.text}</Text>

            </View>
        </View>
    )
};

export default SearchProfile;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // width: '90%',
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
    },
    profileImg: {
        width: 70,
        height: 70,
        marginRight: 10,
    },
    profileInfoContainer: {
        // borderWidth: 1,
        borderColor: 'green',
        width: '78%',
    },
    profileHeaderContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    profileHeaderLeft: {},
    profileName: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    friendsWith: {
        fontSize: 11,
        fontStyle: 'italic',
        color: 'gray',
    },
    profileHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileHeaderBtn: {},
    profileHeaderImg: {
        width: 25,
        height: 25,
    },
    profileAboutText: {},
});