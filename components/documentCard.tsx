import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type CardProps = {
    name : string ,
    summary : string
}

export default function DocumentCard({ name , summary }: CardProps) {
  return (
     <View className='pt-4'>

      <View className='border border-border p-3 rounded-lg'>
        <View className='flex flex-row items-center gap-4'>
        <FontAwesome5 
            className="bg-navy p-4 rounded-lg h-18 w-16 flex items-center justify-center" 
            name="file-pdf" 
            size={30} 
            color="white" 
            />
            <View>
                <Text className='text-text text-xl font-bold text-red'>{name}</Text>
                <Text className='text-text text-md'>{summary}</Text>
            </View>
            
        </View>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})