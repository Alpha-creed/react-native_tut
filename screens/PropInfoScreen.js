import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { pixelNormalize } from '../components/Normalise';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Amenities from '../components/Amenities';

const PropInfoScreen = () => {
    const route=useRoute();
    const navigation = useNavigation()

    useLayoutEffect(() => {
        // console.log(route.params);
        navigation.setOptions({
            headerShown: true,
            title: `${route.params.name}`,
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
    const difference=route.params.oldPrice - route.params.newPrice;
    const offerPrice=(Math.abs(difference)/route.params.oldPrice) *100
      return (
    <View>
      <ScrollView>
        <Pressable style={{flexDirection:'row',flexWrap:'wrap',margin:10}}>
            {route.params.photos.slice(0,5).map((photo,index)=>(
                <View style={{margin:5}} key={index}>
                    <Image style={{
                        width:120,
                        height:pixelNormalize(80),
                        borderRadius:pixelNormalize(4)
                    }}
                    source={{uri:photo.image}}/>
                </View>
            ))}
            <Pressable style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{textAlign:'center',marginLeft:20}}>Show More</Text>
            </Pressable>
        </Pressable>
        <Text style={styles.linThr}/>
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
        <Text style={styles.linThr}/>
        <Text style={styles.propAdult}>
                        Price for 1 Night and {route.params.adults} adults
                    </Text>
        <View style={styles.propPrice}>
                        <Text style={styles.priceText}>
                            ${route.params.oldPrice*route.params.adults}
                        </Text>
                        <Text style={{fontSize:20}}>${route.params.newPrice*route.params.adults}</Text>
                    </View>
                    <View style={styles.offerView}>
                        <Text style={{color:'white'}}>{offerPrice.toFixed(0)} % OFF</Text>
                    </View>
                    <Text style={styles.linThr}/>
                    <View style={styles.checkWrapper}>
                        <View>
                            <Text style={styles.checkIn}>
                                Check In
                            </Text>
                            <Text style={styles.checkText}>
                                    {route.params.selectedDate.startDate}
                                </Text>
                        </View>
                        <View>
                            <Text style={styles.checkOut}>
                            Check Out
                        </Text>
                        <Text style={styles.checkText}>
                            {route.params.selectedDate.endDate}
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
                        <Text style={styles.linThr}/>
                        <Amenities/>
                        <Text style={styles.linThr}/>
                        <Pressable
                            onPress={()=> navigation.navigate('Rooms',{
                                rooms:route.params.availableRooms,
                                oldPrice:route.params.oldPrice,
                                newPrice:route.params.newPrice,
                                name:route.params.name,
                                children:route.params.children,
                                adults:route.params.adults,
                                rating:route.params.rating,
                                startDate:route.params.selectedDate.startDate,
                                endDate:route.params.selectedDate.endDate
                            })}
                            style={styles.pressWrapper}>
                            <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Select Avialability</Text>
                        </Pressable>
      </ScrollView>
    </View>
  )
}

export default PropInfoScreen

const styles = StyleSheet.create({
    pressWrapper:{
        backgroundColor:'#6CB4EE',
        position:'absolute',
        bottom:20,
        padding:15,
        width:'95%',
        marginHorizontal:10,
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
    linThr:{
       borderColor:'#E0E0E0',
       borderWidth:3,
       height:1,
       marginTop:15

    },
    offerView:{
        marginHorizontal:12,
        marginTop:7,
        backgroundColor:'#17B169',
        paddingHorizontal:4,
        paddingVertical:5,
        width:78,
        borderRadius:4
    },
    propPrice:{
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',    
        gap:8,
        marginHorizontal:12
    },
  priceText:{
    color:'red',
    fontSize:20,
    textDecorationLine:'line-through'
},
propAdult:{
    marginTop:4,
    fontSize:15,
    fontWeight:'500',
    marginHorizontal:12
},
propProp:{
    width:200,
    marginTop:6,
    color:'gray',
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
    }
})