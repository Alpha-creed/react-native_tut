import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
const BookingScreen = () => {
  const bookings = useSelector(state=>state.booking.booking)
  console.log(bookings);
  return (
    <SafeAreaView>
      <Text>BookingScreen</Text>
    </SafeAreaView>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})