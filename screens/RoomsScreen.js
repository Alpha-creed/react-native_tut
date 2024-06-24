import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Amenities from '../components/Amenities';
import { Entypo } from '@expo/vector-icons';

const RoomsScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    useLayoutEffect(() => {
        // console.log(route.params);
        navigation.setOptions({
            headerShown: true,
            title: `Available rooms`,
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

    const [selected, setSelected] = useState([])

    return (
        <>
            <ScrollView>
                {route.params.rooms.map((item, index) => (
                    <Pressable style={{ margin: 10, backgroundColor: "white", padding: 10 }} key={index}>
                        <View style={styles.viewName} >
                            <Text style={styles.textName}>{item.name}</Text>
                            <Ionicons name="information-circle-outline" size={24} color="#007FFF" />
                        </View>
                        <Text style={{ margin: 3 }}>pay at the property</Text>
                        <Text style={{ marginTop: 3, color: 'green', fontSize: 15 }}>Free cancellation Avialable</Text>
                        <View style={{ marginTop: 4, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Text style={styles.oldPrice}>${route.params.oldPrice}</Text>
                            <Text style={{ fontSize: 18 }}>${route.params.newPrice}</Text>
                        </View>
                        <Amenities />
                        {selected.includes(item.name) ? (
                            <Pressable style={styles.btnWrapper1}>
                                <Text style={styles.btnText1}>
                                    SELECTED
                                </Text>
                                <Entypo onPress={() => setSelected([])} name="circle-with-cross" size={24} color="red" />
                            </Pressable>
                        ) : (
                            <Pressable onPress={() => setSelected(item.name)} style={styles.btnWrapper}>
                                <Text style={styles.btnText}>SELECT</Text>
                            </Pressable>
                        )}

                    </Pressable>
                ))}
            </ScrollView>

            {selected.length > 0 ? (
                <Pressable onPress={() => navigation.navigate('User', {
                    oldPrice: route.params.oldPrice,
                    newPrice: route.params.newPrice,
                    name: route.params.name,
                    children: route.params.children,
                    adults: route.params.adults,
                    rating: route.params.rating,
                    startDate: route.params.startDate,
                    endDate: route.params.endDate
                })} style={styles.resWrapper}>
                    <Text style={styles.resText}>Reserve</Text>
                </Pressable>
            ) : (
                null
            )}
        </>
    )
}

export default RoomsScreen

const styles = StyleSheet.create({
    resWrapper: {
        backgroundColor: '#007FFF',
        padding: 8,
        marginBottom: 30,
        borderRadius: 3,
        marginHorizontal: 15
    },
    resText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    btnWrapper1: {
        borderColor: '#318CE7',
        backgroundColor: '#F0F8FF',
        borderWidth: 2,
        width: '100%',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnText1: {
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#318CE7',
        fontWeight: 'bold',
        fontSize: 18
    },
    btnWrapper: {
        borderColor: '#007FFF',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10
    },
    btnText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#007FFF'
    },
    oldPrice: {
        fontSize: 18,
        color: 'red',
        textDecorationLine: 'line-through'
    },
    textName: {
        color: '#007FFF',
        fontSize: 17,
        fontWeight: '500'
    },
    viewName: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})