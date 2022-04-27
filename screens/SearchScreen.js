import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import SearchProfile from '../components/SearchProfile';

const SearchScreen = () => {

  const profileImages = {
    img1: require('../assets/search-profile-pic1.png'),
    img2: require('../assets/search-profile-pic2.png'),
    img3: require('../assets/search-profile-pic3.png'),
    img4: require('../assets/search-profile-pic4.png'),
    img5: require('../assets/search-profile-pic5.png'),
  };

  const [person, setPerson] = useState();

  const cancelSearch = () => {
    setPerson(null);
  }
  
  return (
    <ScrollView
      style={styles.container}>
    
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder={'Type to search..'}
          value={person}
          onChangeText={text => setPerson(text)}/>
        <TouchableOpacity 
          style={styles.cancelBtn}
          onPress={() => cancelSearch()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Challenges</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
      </View>

      {/* SearchProfile Component */}
      <SearchProfile 
        name={'Justin Timberlake'}
        text={'The CEO of BIG Ind. searching for like - minded people that are curious in achieving their BIG Goals!'}
        profileImg={profileImages.img1}
      />
      <SearchProfile 
        name={'Tereza Romanova'}
        text={'Founder & CEO @ HR.consulting | Helping companies to improve KPI through right people management'}
        profileImg={profileImages.img2}
      />
      <SearchProfile 
        name={'Pak Nikolaev'}
        text={'Fonomodern. Dinil dofide viskade. Trädmord tetragöpp. Lapyna multiliga.'}
        profileImg={profileImages.img3}
      />
      <SearchProfile 
        name={'Kim Evgeniy'}
        text={'Krorade tektiga. Eldost polyde. Kroliktig öbilingar dinerat. Rör terafäling i nysade.'}
        profileImg={profileImages.img4}
      />
      <SearchProfile 
        name={'Daniel Jackson'}
        text={'Krorade tektiga. Eldost polyde. Kroliktig öbilingar dinerat. Rör terafäling i nysade.'}
        profileImg={profileImages.img5}
      />
      <SearchProfile 
        name={'Tereza Romanova'}
        text={'Founder & CEO @ HR.consulting | Helping companies to improve KPI through right people management'}
        profileImg={profileImages.img2}
      />

    </ScrollView>
  )
}; 

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#defafa',
  },
  searchContainer: {
    backgroundColor: '#b6dbd8',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    width: '80%',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  cancelBtn: {
    
  },
  cancelText: {
    fontSize: 18,
    color: '#0A7AFF',
  },
  filterContainer: {
    backgroundColor: '#defafa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  filterBtn: {
    backgroundColor: '#83ebeb',
    padding: 10,
    borderRadius: 15,
    width: 100,
    alignItems: 'center',
  },
  filterText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});