import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InfoCard from '@/components/info';
import Card from '@/components/card';
import DocumentCard from '@/components/documentCard';


export default function AboutScreenView() {
  return (
    <SafeAreaView className='bg-white ' style={styles.container}>
      
        <InfoCard 
            infoText={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste doloribus, suscipit odio aut repellat.'}  
            btnText={'Report an Incident'}/>
    
        {/* text view */}
        <View className='mt-8 container'>
            <Text className='text-text text-md '>
                Incase of any emergency contact the following,help desks and authorities
            </Text>
        </View>
        
        <Card name='Police' contact='0579568956'/>
        <DocumentCard name='Fire Service' summary='Approved Podlicy'/>
        

    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-betwesen',
    },
})

