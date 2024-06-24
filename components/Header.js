import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Header = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.pressDefault}>
                <Ionicons name="bed-outline" size={24} color="white" />
                <Text style={styles.textStay}>Stays</Text>
            </Pressable>
            <Pressable style={styles.press}>
                <Ionicons name="airplane-outline" size={24} color="white" />
                <Text style={styles.textStay}>Flight</Text>
            </Pressable>
            <Pressable style={styles.press}>
                <AntDesign name="car" size={24} color="white" />
                <Text style={styles.textStay}>Car Rental</Text>
            </Pressable>
            <Pressable style={styles.press}>
                <FontAwesome5 name="delicious" size={24} color="white" />      
                <Text style={styles.textStay}>Taxi</Text>
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003580',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    pressDefault: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 25,
        padding: 6
    },
    press: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStay: {
        marginLeft: 8,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
})