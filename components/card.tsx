import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

type CardProps = {
    name : string ,
    contact : string
}

export default function card({ name , contact }: CardProps) {
  return (
     <View className='pt-6 container '>

      <View className='border border-border p-3 rounded-lg'>
        <View className='flex flex-row items-center gap-4'>
            <Feather className='bg-navy p-2 rounded-lg' name="phone" size={40} color="white" />
            <View>
                <Text className='text-text text-xl font-bold text-red'>{name}</Text>
                <Text className='text-text text-md'>{contact}</Text>
            </View>
            
        </View>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})