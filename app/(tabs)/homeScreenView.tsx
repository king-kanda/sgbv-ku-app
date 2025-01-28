import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InfoCard from '@/components/info';
import Card from '@/components/card';
import Header from '@/components/header';

export default function splashScreenView() {

    const contactData = [
        {
          id: 1,
          name: "KU Security Office",
          phone: "0725 471487",
        },
        {
          id: 2,
          name: "Director, Students' Affairs",
          phone: "020 8704470",
        },
        {
          id: 3,
          name: "Private Advisor for Sexual Assault",
          phone: "0798 416091",
        },
        {
          id: 4,
          name: "KU Health Unit",
          phone: "020 2503638 / 020 2503636",
        },
        {
          id: 5,
          name: "KU Accommodation Office",
          phone: "020 8703685",
        },
        {
          id: 6,
          name: "KU Accommodation Office",
          phone: "020 8703685",
        },
        {
          id: 7,
          name: "KU Accommodation Office",
          phone: "020 8703685",
        },
      ];

  return (
    <SafeAreaView className='bg-white ' style={styles.container}>
        <Header/>
        <ScrollView className='w-full'>
            <View className='px-6'>

                <InfoCard 
                    infoText={'This Apps is brought to you by the KU Centre for Gender Equity & Empoverment.It is a tool tp help the KU community report and document cases of SGBV'}  
                    btnText={'Report an Incident'}
                    link='/reporting'
                />
            
                {/* text view */}
                <View className='mt-8'>
                    <Text className='text-text text-md '>
                        Incase of any emergency contact the following,help desks and authorities
                    </Text>
                </View>

                {contactData.map((contact) => (
                    <Card key={contact.id} name={contact.name} contact={contact.phone}/>
                ))}

            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
})

