import React from 'react';
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
import Posts from "./src/components/Posts"
import Login from './src/components/Login';



const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


const App: () => Node = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "white",
  };

const Tab = createBottomTabNavigator();
const Home = () =>  <Posts/>

  return (
    <NavigationContainer>
          <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused? 'md-home' : 'md-home-outline'
            } else if (route.name === 'Settings') {
              iconName = focused? 'md-heart' : 'md-heart-outline'
            } else if (route.name === "Login"){
              iconName = focused? 'md-person' : "md-person-outline"
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          lazy: true
        })}
      >
        <Tab.Screen name="Home" component={Posts} />
        <Tab.Screen name="Settings" component={AlbumsRoute} />
        <Tab.Screen name="Login" component={Login} />
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
