import React, {createContext, useEffect} from 'react';
import type {Node} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeStack from './src/screens/Home';
import UserStack from "./src/screens/User"

export const userContext = createContext(null)

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


const App = () => {
  const [user, setUser] = useState(null)



  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "white",
  };

const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
          <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused? 'md-home' : 'md-home-outline'
            } else if (route.name === 'My Posts') {
              iconName = focused? 'book' : 'book-outline'
            } else if (route.name === "UserStack"){
              iconName = focused? 'md-person' : "md-person-outline"
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          lazy: true,
        })}
      >
        <Tab.Screen options={{headerShown: false}} name="Home" component={HomeStack} />
        <Tab.Screen  name="My Posts" component={AlbumsRoute} />
        <Tab.Screen options={{headerShown: false}} name="UserStack" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
