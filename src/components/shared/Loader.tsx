import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const Loader = () => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <ActivityIndicator color={Colors.Primary} size={"large"}/>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})