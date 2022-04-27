import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Chat from '../components/Chat';

const MessageScreen = () => {

  const profileImages = {
    img1: require('../assets/profile-pic1.png'),
    img2: require('../assets/profile-pic2.png'),
    img3: require('../assets/profile-pic3.png'),
    img4: require('../assets/profile-pic4.png'),
    img5: require('../assets/search-profile-pic3.png'),
  };

  return (
    <ScrollView
      style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        <Text style={styles.chatsText}>Chats</Text>

        <TouchableOpacity style={styles.startChatBtn}>
          <Ionicons name="create-outline" size={26} color="#0A7AFF" 
            style={styles.startChatImg}
          />
        </TouchableOpacity>
      </View>

      {/* Chat Component */}
      <Chat 
        name={'Ben Parker'}
        time={'15:03'}
        text={'Hey bro! I just found out really cool challenge. We can learn coding in Python just in 1 month!'}
        profileImg={profileImages.img1}
      />
      <Chat 
        name={'Julian Wan'}
        time={'12:35'}
        text={'Do you know how can I take more than 3 challenges? Do I really have to pay for it? Well... I am gonna!!'}
        profileImg={profileImages.img2}
      />
      <Chat 
        name={'Jannet Smith'}
        time={'Yesterday'}
        text={'Wassup! What do you think about starting the collaborative challenge? I feel like doing it on my own would be hard.'}
        profileImg={profileImages.img3}
      />
      <Chat 
        name={'Daniel Jackson'}
        time={'Yesterday'}
        text={'I know that I am just a pet, but bro, I wanna grows as a dog in a professional way! Teach me to take challenges!'}
        profileImg={profileImages.img4}
      />
      <Chat 
        name={'Mark Zuckerberg'}
        time={'2d ago'}
        text={'Wow! Really cool app bro. Would you mind if I bought it? I think we can make millions on it!'}
        profileImg={profileImages.img5}
      />
    </ScrollView>
  )
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#defafa'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#b6dbd8'
  },
  editText: {
    color: '#0A7AFF',
    fontSize: 16,
  },
  chatsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  startChatBtn: {},
  startChatImg: {},
});