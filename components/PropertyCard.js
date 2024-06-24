import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const PropertyCard = ({ rooms, children, property, adults, selectedDate, availableRooms }) => {
 const { width, height } = Dimensions.get('window')
    const navigation=useNavigation()
 return (
        <View>
            <Pressable 
                onPress={()=>navigation.navigate('Info',{
                    name:property.name,
                    rating:property.rating,
                    oldPrice:property.oldPrice,
                    newPrice:property.newPrice,
                    photos:property.photos,
                    availableRooms:property.rooms,
                    adults:adults,
                    children:children,
                    rooms:rooms,
                    selectedDate:selectedDate

                })}
            style={styles.pressWrapper}>
                <View>
                    <Image style={{
                        height: height / 4,
                        width: width - 280
                    }} 
                    source={{ uri: property.image }} />
                </View>
                <View style={{padding:10}}>
                    <View style={styles.propName}>
                        <Text style={{width:200}}>{property.name}</Text>
                        <AntDesign name="hearto" size={24} color="red" />
                    </View>
                    <View style={styles.propRate}>
                    <MaterialIcons name="stars" size={24} color="green" />
                    <Text>{property.rating}</Text>
                    <View style={styles.genStyle}> 
                        <Text style={styles.genText}>Genius Level</Text>
                    </View>
                    </View>
                    <Text style={styles.propProp}>{property.address.length>50?property.address.substr(0,50):property.address}</Text>
                    <Text style={styles.propAdult}>
                        Price for 1 Night and {adults} adults
                    </Text>
                    <View style={styles.propPrice}>
                        <Text style={styles.priceText}>
                            ${property.oldPrice*adults}
                        </Text>
                        <Text style={{fontSize:18}}>${property.newPrice*adults}</Text>
                    </View>
                    <View style={{marginVertical:6}}>
                        <Text style={{fontSize:16,color:'gray'}}>Deluxe Room</Text>
                        <Text style={{fontSize:16,color:'gray'}}>Hotel Room:1 bed</Text>
                    </View>
                    <View style={styles.limStyle}>
                        <Text style={styles.limText}>Limited Time Deal</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default PropertyCard

const styles = StyleSheet.create({
    propPrice:{
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',    
        gap:8
    },
    priceText:{
        color:'red',
        fontSize:18,
        textDecorationLine:'line-through'
    },
    propAdult:{
        marginTop:4,
        fontSize:15,
        fontWeight:'500'
    },
    propProp:{
        width:200,
        marginTop:6,
        color:'gray',
        fontWeight:'bold'
    },
    propName:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
    },
    propRate:{
        flexDirection:'row',
        alignItems:'center',
        gap:6,
        marginTop:7
    },
    genText:{
        textAlign:'center',
        color:'white',
        fontSize:15
    },
    limStyle:{
        paddingVertical:3,
        backgroundColor:'#6082B6',
        width:150,
        borderRadius:5,
        paddingHorizontal:4
    },
    limText:{
        textAlign:'center',
        color:'white'
    },
    genStyle:{
        paddingVertical:3,
        backgroundColor:'#6CB4EE',
        width:100,
        borderRadius:5
    },
    pressWrapper: {
        margin: 15,
        flexDirection: 'row',
        backgroundColor: 'white'
    }
})