import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native'
import React, { Children, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import Modal from 'react-native-modal';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [selectedDate, setSelectedDate] = useState()
    const route=useRoute()
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: 'Booking.com',
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
            headerRight: () => (
                <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 15 }} />

            )
        })
    }, [])
    const customButton = (onConfirm) => {
        return (
            <Button
                onPress={onConfirm}
                style={{
                    container: { width: '80%', marginHorizontal: '3%' },
                    text: { fontSize: 20 },
                }}
                primary
                title="Submit"
            />
        )
    }

    const searchPlaces=(places)=>{
        if(!route.params || !selectedDate) {
            Alert.alert('Invalid Details', 'Please enter all the details', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        if(route.params && selectedDate){
            navigation.navigate('Places',{
                rooms:rooms,
                adults:adults,
                children:children,
                selectedDate:selectedDate,
                places:places
            })
        }
    }

    return (
        <>
            <View>
                <Header />
                <ScrollView>
                    <View style={styles.thinLine}>
                        {/* Destination */}
                        <Pressable onPress={()=>navigation.navigate('Search')} style={styles.destination}>
                            <Feather name="search" size={24} color="black" />
                            <TextInput placeholderTextColor={'black'} placeholder={route?.params ? route.params.input:'Enter Your Destination'} />
                        </Pressable>

                        {/* Selected Dates */}
                        <Pressable style={styles.destination}>
                            <AntDesign name="calendar" size={24} color="black" />
                            <DatePicker
                                style={{ width: 350, height: 30, borderWidth: 0, borderRadius: 0, borderColor: 'transparent' }}
                                customStyles={{
                                    placeholderText: {
                                        fontSize: 15,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 'auto',
                                    },
                                    headerStyle: {
                                        backgroundColor: '#003580',
                                    },
                                    contentText: {
                                        fontSize: 15,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 'auto',
                                    },
                                }}
                                selectedBgColor='#0047AB'
                                customButton={(onConfirm) => customButton(onConfirm)}
                                allowFontScaling={false} // optional
                                placeholder={'Apr 27, 2018 → Jul 10, 2018'}
                                mode={'range'}
                                onConfirm={(startDate, endDate) => setSelectedDate(startDate, endDate)}
                            />
                        </Pressable> 

                        {/* Rooms and Guests */}
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                            style={styles.destination}>
                            <Ionicons name="person-outline" size={24} color="black" />
                            <TextInput
                             placeholderTextColor={'red'} 
                            placeholder={`${rooms} rooms - ${adults} adults - ${children} Children`} />
                        </Pressable>

                        {/* search button */}
                        <Pressable 
                            onPress={()=>searchPlaces(route?.params.input)}
                            style={styles.search}>
                            <Text style={styles.searchText}>Search</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.spendLessStyle}>Travel More Spend Less</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Pressable style={styles.GeniusWrapper}>
                            <Text style={styles.GeniusText}>Genius</Text>
                            <Text style={styles.GenLoyText}>You are at genius level one in your loyalty program</Text>
                        </Pressable>
                        <Pressable style={styles.GeniusWrapper1}>
                            <Text style={styles.GeniusText1}>15% Discounts</Text>
                            <Text style={styles.GenLoyText1}>Complete 5 stays to unlock level 2</Text>
                        </Pressable>
                        <Pressable style={styles.GeniusWrapper1}>
                            <Text style={styles.GeniusText1}>10% Discounts</Text>
                            <Text style={styles.GenLoyText1}>Enjoy Discounts at participating at properties worldwide</Text>
                        </Pressable>
                    </ScrollView>
                    <Pressable style={styles.imgWrapper}>
                        <Image style={styles.img} source={{uri:'https://images.unsplash.com/photo-1503437313881-503a91226402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3BpcmF0aW9ufGVufDB8fDB8fHww'}}/>
                    </Pressable>
                            
                </ScrollView>
            </View>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['up', 'down']}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackButtonPress={() => setModalVisible(false)}
                style={styles.modal}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Select rooms and guests</Text>
                    <View style={styles.content}>
                        <View style={styles.contentView}>
                            <Text style={styles.styleRoom}>Rooms</Text>
                            <Pressable style={styles.roomsPress}>
                                <Pressable onPress={()=>setRooms(Math.max(1,rooms-1))} style={styles.styleMinus}>
                                    <Text style={styles.textMinus}>-</Text>
                                </Pressable>
                                <Pressable>
                                    <Text> {rooms}</Text>
                                </Pressable>
                                <Pressable onPress={()=>setRooms((c)=>c+1)} style={styles.styleMinus}>
                                    <Text style={styles.textMinus}>+</Text>
                                </Pressable>
                            </Pressable>
                        </View>
                        <View style={styles.contentView}>
                            <Text style={styles.styleRoom}>Adults</Text>
                            <Pressable style={styles.roomsPress}>
                                <Pressable onPress={()=>setAdults(Math.max(1,adults-1))}style={styles.styleMinus}>
                                    <Text style={styles.textMinus}>-</Text>
                                </Pressable>
                                <Pressable>
                                    <Text> {adults}</Text>
                                </Pressable>
                                <Pressable  onPress={()=>setAdults((c)=>c+1)} style={styles.styleMinus}>
                                    <Text style={styles.textMinus}>+</Text>
                                </Pressable>
                            </Pressable>
                        </View>
                        <View style={styles.contentView}>
                            <Text style={styles.styleRoom}>Children</Text>
                            <Pressable style={styles.roomsPress}>
                                <Pressable onPress={()=>setChildren(Math.max(0,children-1))} style={styles.styleMinus}>
                                    <Text style={styles.textMinus}>-</Text>
                                </Pressable>
                                <Pressable>
                                    <Text> {children}</Text>
                                </Pressable>
                                <Pressable onPress={()=>setChildren((c)=>c+1)} style={styles.styleMinus}>
                                    <Text style={styles.textMinus}>+</Text>
                                </Pressable>
                            </Pressable>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.applyButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    imgWrapper:{
        marginTop:40,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:250,
        height:60,
        resizeMode:'cover'
    },
    spendLessStyle:{
        marginHorizontal:20,
        fontSize:17,
        fontWeight:'500',
    },
    GeniusText1:{
        fontSize:15,
        fontWeight:'bold',
        marginVertical:7
    },
    GenLoyText1:{
        fontSize:15,
        fontWeight:'500'
    },
    GeniusText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        marginVertical:7
    },
    GenLoyText:{
        color:'white',
        fontSize:15,
        fontWeight:'500'
    },
    GeniusWrapper1:{
        width:200,
        height:150,
        marginTop:10,
        borderColor:'#E0E0E0',
        borderWidth:2,
        borderRadius:10,
        padding:20,
        marginHorizontal:20
    },
    GeniusWrapper:{
        width:200,
        height:150,
        marginTop:10,
        backgroundColor:'#003580',
        borderRadius:10,
        padding:20,
        marginHorizontal:20
    },
    styleRoom:{
        fontSize:16,
        fontWeight:'500'
    },
    textMinus: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        paddingHorizontal: 6,
    },
    styleMinus: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderColor: '#BEBEBE',
        backgroundColor: '#E0E0E0'
    },
    roomsPress: {
        flexDirection: 'row', alignItems: 'center', gap: 10
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '45%', // Adjust height as needed
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 12,
        alignSelf: 'stretch',
        textAlign: 'center',

    },
    content: {
        flex: 1,
        width: '100%',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        height: 285,
        rowGap:30,
        flexDirection:'column'
        // Add any additional styling for your content here
    },
    contentView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: '15'
    },
    applyButton: {
        padding: 15,
        backgroundColor: 'blue',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        borderRadius: 20
    },
    applyButtonText: {
        color: 'white',
        fontSize: 16,
    },
    thinLine: {
        margin: 20,
        borderColor: '#FFC72C',
        borderWidth: 3,
        borderRadius: 6
    },
    destination: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: '#FFC72C',
        borderWidth: 2,
        paddingVertical: 15,
    },
    search: {
        paddingHorizontal: 10,
        borderColor: '#FFC72C',
        borderWidth: 2,
        paddingVertical: 15,
        backgroundColor: '#2a52be'
    },
    searchText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
    }
})