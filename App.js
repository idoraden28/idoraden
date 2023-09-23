import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  SearchScreen,
  VideoScreen,
  StoreScreen,
  ProfileScreen
} from './pages'

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="search" component={SearchScreen} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="magnify" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Video" component={VideoScreen} options={{
        tabBarLabel: 'Reels',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="video" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Store" component={StoreScreen} options={{
        tabBarLabel: 'Store',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="store" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Instagram" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;