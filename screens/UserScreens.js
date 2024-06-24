import { StyleSheet, Text, View,TextInput, Pressable, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const UserScreens = () => {
    const route = useRoute()
    const navigation = useNavigation()

    useLayoutEffect(() => {
        // console.log(route.params);
        navigation.setOptions({
            headerShown: true,
            title: `User Details`,
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
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNo,setPhoneNo] = useState("")
    const finalStep=()=>{
        if(!firstName||!lastName||!email||!phoneNo){
            Alert.alert('Invalid Details', 'Please Enter all the fields', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        if(firstName&&lastName&&email&&phoneNo){
       navigation.navigate('Confirmation',{
            oldPrice:route.params.oldPrice,
            newPrice:route.params.newPrice,
            name:route.params.name,
            children:route.params.children,
            adults:route.params.adults,
            rating:route.params.rating,
            startDate:route.params.startDate,
            endDate:route.params.endDate
})}
    }
  return (
    <>
    <View style={{padding:20}}>
      <View style={styles.inputWrapper}>
        <Text>First Name</Text>
        <TextInput value={firstName} onChangeText={(text)=>setFirstName(text)} style={styles.input}/>
      </View>
      <View style={styles.inputWrapper}>
        <Text>Last Name</Text>
        <TextInput value={lastName} onChangeText={(text)=>setLastName(text)} style={styles.input}/>
      </View>
      <View style={styles.inputWrapper}>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={(text)=>setEmail(text)} style={styles.input}/>
      </View>
      <View style={styles.inputWrapper}>
        <Text>Phone No</Text>
        <TextInput value={phoneNo} onChangeText={(text)=>setPhoneNo(text)}style={styles.input}/>
      </View>
    </View>
    <Pressable style={styles.priceWrapper}>
        <View >
            <View style={styles.priceView}>
                <Text style={styles.priceText}>
                <View style={styles.propPrice}>
                        <Text style={styles.priceText}>
                            ${route.params.oldPrice*route.params.adults}
                        </Text>
                        <Text style={{fontSize:20}}>${route.params.newPrice*route.params.adults}</Text>
                    </View>
                </Text>
            </View>
            <Text style={{marginHorizontal:12}}>You saved ${route.params.oldPrice=route.params.newPrice}</Text>
        </View>
        <Pressable onPress={finalStep} style={styles.finalBtn}>
            <Text style={styles.finalText}>Final Step</Text>
        </Pressable>
      </Pressable>
    </>
  )
}

export default UserScreens

const styles = StyleSheet.create({
    finalBtn:{
        backgroundColor:'#007FFF',
        padding:10,
        borderRadius:5
    },
    finalText:{
        textAlign:'center',
        color:'white',
        fontSize:15
    },
    priceWrapper:{
        backgroundColor:'white',
        marginTop:'auto',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        paddingBottom:40,
        justifyContent:'space-between'
    },
    priceView:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:12,
        marginTop:4,
        gap:8
    },
    priceText:{
        color:'red',
        fontSize:20,
        textDecorationLine:'line-through'
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
    inputWrapper:{
        flexDirection:'column',
        gap:10
    },
    input:{
        padding:10,
        borderColor:'gray',
        borderWidth:1
    }
})