import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useRoute } from '@react-navigation/native'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const MapScreen = () => {
    const route = useRoute()
    const mapView = useRef(null)
    const cooradinates=[]
    const details=route.params.SearchResults.map((item)=>item.properties?.map((prop)=>{
        cooradinates.push({
            latitude:Number(prop.latitude),
            longitude:Number(prop.longitude)
        })
    }))
    useEffect(()=>{
        mapView.current.fitToCoordinates(cooradinates,{
            edgePadding:{
                top:190,
                left:190,
                bottom:190,
                right:190
            }
        })
    })
    return (
        <View> 
            <MapView
                ref={mapView}
                style={styles.mapView}
            >
                {route.params.SearchResults.map((item)=>
                    item.properties.map((property,index)=>(
                        <Marker
                        key={index}
                            title={property.name}
                            coordinate={{
                                latitude:Number(property.latitude),
                                longitude:Number(property.longitude)
                            }}>
                                <Pressable style={styles.pressWrapper}>
                                    <Text style={styles.priceText}>{property.newPrice} </Text>
                                </Pressable>
                            </Marker>
                    )))}
            </MapView>
              
              </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    mapView: {
        width: '100%',
        height: '100%'
    },
    priceText:{
        fontSize:15,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    pressWrapper:{
        backgroundColor:'#003580',
        paddingHorizontal:7,
        paddingVertical:4,
        borderRadius:4
    }
})