import { Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Task from '../components/Task';

const ProfileScreen = () => {
  return (
    <ScrollView
      style={styles.container}>

      <View style={styles.profileContainer}>

        <Image 
          style={styles.profileImage}
          source={require('../assets/profile-img.jpeg')}
        />

        <View style={styles.profileInfoView}>

          <Text style={styles.name}>Juan Rodrigo</Text>
          <Text style={styles.about}>Young enthusiast who's willing to reach the perfection by challenging myself every single day</Text>

          <View style={styles.profileButtons}>
            <TouchableOpacity style={styles.friendsBtn}>
              <Text style={styles.friendsNum}>175 friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.friendsBtn}>
              <Text style={styles.friendsNum}>3 active challenges</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <View style={styles.challengesContainer}>
        <Text style={styles.challengesText}>Challenges: </Text>
        
        <Task text={'Java Course'}/>
        <Task text={'20 books in month'}/>
        <Task text={'Trade Crypto'}/>
        
      </View>

      <View style={styles.postsSection}>
        <Text style={styles.challengesText}>Posts:</Text>

        <View style={styles.postContainer}>

          <View style={styles.postHeadingContainer}>
            <View style={styles.postHeading}>
              <Image 
                style={styles.postIcon}
                source={require('../assets/post-icon.png')}
              />
              <Text style={styles.challengeName}>Java Course</Text>
            </View>
            <Text style={styles.postDate}>05.04.2022</Text>
          </View>

          <View style={styles.postBox}>
            <Text style={styles.postText}>Yeah, I'm making progress, already learnt the OOP side!</Text>
          </View>

        </View>

        <View style={styles.postContainer}>

          <View style={styles.postHeadingContainer}>
            <View style={styles.postHeading}>
              <Image 
                style={styles.postIcon}
                source={require('../assets/post-icon.png')}
              />
              <Text style={styles.challengeName}>20 Books in Month</Text>
            </View>
            <Text style={styles.postDate}>12.09.2021</Text>
          </View>

          <View style={styles.postBox}>
            <Text style={styles.postText}>
              Already finished 5 books, the latest was the
                tough one, recommend to everyone!
            </Text>
          </View>

        </View>

      </View>

    </ScrollView>
  )
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6dbd8'
    // padding: 15, 
  },
  profileContainer: {
    // padding: 15,
    paddingTop: 40,
    // backgroundColor: '#defafa',
    marginBottom: 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  profileImage: {
    marginLeft: 15,
    marginTop: 15,
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 1,
  },
  profileInfoView: {
    // borderWidth: 1,
    // borderColor: 'green',
    width: '100%',
    // backgroundColor: '#defafa',
    padding: 15,
    borderRadius: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.9,
    marginBottom: 5,
  },
  about: {
    fontSize: 16,
    marginBottom: 15,
  },
  profileButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  friendsBtn: {
    // backgroundColor: '#defafa',
    padding: 10,
    borderRadius: 10,
  },
  friendsNum: {
    fontSize: 16,
    color: 'blue',
  },
  challengesNum: {},
  challengesContainer: {
    width: '100%',
    backgroundColor: '#defafa',
    padding: 15,
    borderRadius: 15,
    marginBottom: 3,
  },
  challengesText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postsSection: {
    backgroundColor: '#defafa',
    padding: 15,
    width: '100%',
    borderRadius: 15,
  },
  postContainer: {
    marginBottom: 15,
  },
  postHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: 10,
  },
  postHeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  challengeName: {
    fontSize: 18,
  },
  postDate: {
    fontSize: 16,
  },
  postBox: {
    padding: 15,
    backgroundColor: '#e3e8e8',
    borderRadius: 15,
  },
  postText: {
    fontSize: 17,
  },
});