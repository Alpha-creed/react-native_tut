import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Amenities = () => {
    const services = [
        {
          id: "0",
          name: "room service",
        },
        {
          id: "2",
          name: "free wifi",
        },
        {
          id: "3",
          name: "Family rooms",
        },
        {
          id: "4",
          name: "Free Parking",
        },
        {
          id: "5",
          name: "swimming pool",
        },
        {
          id: "6",
          name: "Restaurant",
        },
        {
          id: "7",
          name: "Fitness center",
        },
      ];
  return (
    <View style={{padding:10}}>
      <Text style={{fontSize:17,fontWeight:'600'}}>Most Popular Facilities</Text>
        <View style={styles.servWrapper}>
            {services.map((item,index)=>(
                <View style={styles.faciWrapper} key={index}>
                    <Text style={{textAlign:'center',color:'white',fontSize:16}}>{item.name}</Text>
                 </View>   
            ))}
        </View>
    </View>
  )
}

export default Amenities

const styles = StyleSheet.create({
    faciWrapper:{
        margin:10,
        backgroundColor:'#007FFF',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:25
    },
    servWrapper:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        paddingVertical:10,
        paddingBottom:30
    }
})