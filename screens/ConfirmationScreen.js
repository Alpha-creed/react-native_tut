import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useDispatch} from 'react-redux'
import { savedPlaces } from '../SavedReducer';
const ConfirmationScreen = () => {
    const route=useRoute()
    const navigation=useNavigation()
    const dispatch=useDispatch()

    useLayoutEffect(() => {
        // console.log(route.params);
        navigation.setOptions({
            headerShown: true,
            title: `Confirmation`,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#003580',
                height: 110,
                borderBottomColor: 'transparent',
                shadowColor: 'transparent'
            },
            headerBackTitle: 'Back'
        })
    }, [])
    const confirmBooking=()=>{
        dispatch(savedPlaces(route.params))
        navigation.navigate('Main')
    }
  return (
    <View>
        <Pressable>
         <View style={{
            marginHorizontal:22,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:20}}>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{route.params.name}</Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        gap:6,
                        marginTop:7
                    }}
                >
                    <MaterialCommunityIcons name="star-circle" size={24} color="green" />
                    <Text>{route.params.rating}</Text>
                    <View style={styles.genWrapper}>
                        <Text style={styles.genText}>Genius Level</Text>
                    </View>

                </View>
            </View>
            <View style={styles.traWrapper}>
                <Text style={{color:'white',fontSize:13}}>Travel sustainable</Text>
            </View>
        </View>
        <View style={styles.checkWrapper}>
                        <View>
                            <Text style={styles.checkIn}>
                                Check In
                            </Text>
                            <Text style={styles.checkText}>
                                    {route.params.startDate}
                                </Text>
                        </View>
                        <View>
                            <Text style={styles.checkOut}>
                            Check Out
                        </Text>
                        <Text style={styles.checkText}>
                            {route.params.endDate}
                        </Text>
                        </View>

                    </View>
                        <View style={{margin:12}}>
                                <Text style={styles.checkIn}>
                                    Rooms and Guests
                                </Text>
                                <Text style={styles.checkText}>
                                    {route.params.rooms} rooms {route.params.adults} adults{" "}
                                    {route.params.children} children
                                </Text>
                        </View>
                        <Pressable onPress={confirmBooking} style={styles.bookWrapper}>
                            <Text style={styles.bookText}>Book Now</Text>
                        </Pressable>
        </Pressable>
    </View>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({
    bookWrapper:{
        backgroundColor:'#003580',
        width:120,
        padding:5,
        marginHorizontal:12,
        marginBottom:20,
        borderRadius:4
    },
    bookText:{
        textAlign:'center',
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
    traWrapper:{
        backgroundColor:'#17B169',
        paddingHorizontal:6,
        paddingVertical:4,
        borderRadius:6
    },
    genWrapper:{
        backgroundColor:'#003580',
        paddingVertical:3,
        borderRadius:5,
        width:100
    },
    genText:{
        textAlign:'center',
        color:'white',
        fontSize:15,
    },
    checkText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#007FFF'
    },
    checkIn:{
        fontSize:16,
        fontWeight:'600',
        marginBottom:3
    },
    checkOut:{
        fontSize:16,
        fontWeight:'600',
    marginBottom:3
    },
    checkWrapper:{
        margin:12,
        flexDirection:'row',
        alignItems:'center',
        gap:60,
    },
})