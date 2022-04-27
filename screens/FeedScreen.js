import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import FeedPost from '../components/FeedPost';

const FeedScreen = () => {

  const profileImages = {
    img1: require('../assets/profile-pic1.png'),
    img2: require('../assets/profile-pic2.png'),
    img3: require('../assets/profile-pic3.png'),
    img4: require('../assets/profile-pic4.png'),

  };

  return (
    <ScrollView
      style={styles.container}>
      
      <View style={styles.feedHeaderContainer}>
        <Image 
          style={styles.profileImg}
          source={require('../assets/profile-img.jpeg')}
        />
        <Text style={styles.feedHeading}>Feed</Text>
      </View>

      <FeedPost 
        name='Ben Parker'
        hours='3h'
        challengeName='Pump Up'
        postText='Ive been working on workout, so now I see the changes I made, especially step 2(pushups) is very helpful'
        likesNum='667'  
        profileImg={profileImages.img1}
      />
      <FeedPost 
        name='Julian Wan'
        hours='15h'
        challengeName='Learn Japanese'
        postText='Ive been working on workout, so now I see the changes I made, especially step 2(pushups) is very helpful'
        likesNum='538' 
        profileImg={profileImages.img2}
      />
      <FeedPost 
        name='Jannet Smith'
        hours='1d'
        challengeName='Learn Japanese'
        postText='Few month ago started learning and now with the help of app I am on my 3rd and final step 本当にありがとう。'
        likesNum='1253'  
        profileImg={profileImages.img3}
      />
      <FeedPost 
        name='Daniel Jackson'
        hours='2d'
        challengeName='Be a good boy'
        postText='I learn a new command “sit” then the keeper gives me 
        the bone, I am so close to being a good boy;)'
        likesNum='324095' 
        profileImg={profileImages.img4}
      />
      <FeedPost 
        name='Julian Wan'
        hours='3d'
        challengeName='Learn WebDesign'
        postText='Ive been working on design, so Ive published my 
        recent mobile app design. Check it out!'
        likesNum='1042' 
        profileImg={profileImages.img2}
      />
      <FeedPost 
        name='Jannet Smith'
        hours='3d'
        challengeName='Learn WebDesign'
        postText='Couple days ago I discovered really great course on Web Design. This thing is truly cool!'
        likesNum='1042' 
        profileImg={profileImages.img3}
      />
      

    </ScrollView>
  )
}; 

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6dbd8',
    
  },
  feedHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b6dbd8',
    padding: 15,
    paddingTop: 40,
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    marginBottom: 1,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  feedHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    left: '47%',
    bottom: 27,
    letterSpacing: 0.9,
  },
});