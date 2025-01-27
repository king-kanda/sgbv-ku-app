import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

type InfoProps = {
    infoText: string;
    btnText: string;
}


export default function info( {infoText, btnText} : InfoProps) {

  return (
     <View className='pt-8 container'>
        <View className='bg-navy/10 border border-navy rounded-lg p-4 '>
            <View className='flex flex-row items-start gap-4 '> 
                <Feather name="info" size={24} color="#0C426F" />
                <Text className="text-navy w-full flex-shrink text-base">
                    {infoText}
                </Text>
            </View>
            {/* btn */}
            <View className='mt-4'>
                <Pressable className='bg-red px-2 py-4 rounded-sm w-full flex items-center justify-center'>
                    <Text className='text-white'>
                        {btnText}
                    </Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})