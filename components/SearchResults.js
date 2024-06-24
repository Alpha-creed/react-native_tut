import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchResults = ({data,input,setInput}) => {
    const navigation=useNavigation()
  return (
    <View style={styles.viewWrapper}>
        <FlatList data={data} renderItem={({item})=>{
            if(item.place.toLowerCase().includes(input.toLowerCase())){
                if(input === ""){
                    return null;
                }
                return (
                    <Pressable onPress={()=>{
                        setInput(item.place)
                        navigation.navigate('Home',{
                            input:item.place
                        })
                    }} style={styles.pressWrapper}>
                        <View>
                            <Image style={styles.imgStyle} source={{uri:item.placeImage}}/>
                        </View>
                        <View style={styles.viewWrapper}>
                            <Text style={styles.placeStyle}>{item.place}</Text>
                            <Text style={styles.descStyle}>{item.shortDesription}</Text>
                            <Text style={styles.propStyle}>{item.properties.length} properties</Text>
                        </View>
                    </Pressable>
                )
            }
        }}/>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({
    pressWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
    },
    textWrapper:{
        marginLeft:10
    },
    placeStyle:{
        fontSize:15,
        fontWeight:'500'
    },
    descStyle:{
        marginVertical:4
    },
    propStyle:{
        color:'gray',
        fontSize:15
    },
    imgStyle:{
        width:70,
        height:70
    },
    viewWrapper:{
        padding:!0
    }
})