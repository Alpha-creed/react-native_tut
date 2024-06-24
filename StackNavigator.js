import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import { AntDesign } from '@expo/vector-icons';
import SavedScreens from './screens/SavedScreens'
import { Entypo } from '@expo/vector-icons';
import BookingScreen from './screens/BookingScreen'
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import SearchScreens from './screens/SearchScreens'
import PlacesScreens from './screens/PlacesScreens'
import MapScreen from './screens/MapScreen'
import PropInfoScreen from './screens/PropInfoScreen'
import RoomsScreen from './screens/RoomsScreen'
import UserScreens from './screens/UserScreens'
import ConfirmationScreen from './screens/ConfirmationScreen'

const StackNavigator = () => {
    const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()

    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen} options={{
                    tabBarLabel: 'Home', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                        <Entypo name="home" size={24} color="#003580" />
                    ) : (
                        <AntDesign name="home" size={24} color="black" />

                    )
                }}
                />
                <Tab.Screen name='Saved' component={SavedScreens} options={{
                    tabBarLabel: 'Saved', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                        <Entypo name="save" size={24} color="#003580" />
                    ) : (
                        <AntDesign name="save" size={24} color="black" />
                    )
                }}
                />
                <Tab.Screen name='Bookings' component={BookingScreen} options={{
                    tabBarLabel: 'Bookings', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                        <Ionicons name="notifications" size={24} color="#003580" />
                    ) : (
<Ionicons name="notifications-outline" size={24} color="black" />                    )
                }}
                />
                <Tab.Screen name='Profile' component={ProfileScreen} options={{
                    tabBarLabel: 'Profile', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                        <FontAwesome name="user" size={24} color="#003580" />
                    ) : (
                        <Feather name="user" size={24} color="black" />)
                }}
                />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
                <Stack.Screen name="Search" component={SearchScreens} options={{headerShown:false}}/>
                <Stack.Screen name="Places" component={PlacesScreens} />   
                <Stack.Screen name="Map" component={MapScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Info" component={PropInfoScreen}/>  
                <Stack.Screen name="Rooms" component={RoomsScreen} /> 
                <Stack.Screen name="User" component={UserScreens}/>
                <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})