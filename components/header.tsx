import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'

export default function Header() {
  return (
    <View className='bg-navy p-4 w-full border-b border-border'>
      <View className='flex flex-row items-center justify-between'>
        <AntDesign name="home" size={26} color="white" />
        <View className='flex flex-row items-center gap-2'> 
            <AntDesign name="camerao" size={24} color="white" />
            <Entypo name="dots-two-vertical" size={24} color="white" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})