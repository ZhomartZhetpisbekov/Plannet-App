import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import FeedScreen from './screens/FeedScreen';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } 
            else if (route.name === 'Search') {
              iconName = 'search';
            }
            else if (route.name === 'Feed') {
              iconName = 'ios-newspaper-outline'
            } 
            else if (route.name === 'Message') {
              iconName = 'chatbox-ellipses'
            }  
            else if (route.name === 'Profile') {
              return <MaterialCommunityIcons name="contacts" size={28} color={color}/>
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={28} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name='Feed' component={FeedScreen}/>
        <Tab.Screen name='Search' component={SearchScreen}/>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Message' component={MessageScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
