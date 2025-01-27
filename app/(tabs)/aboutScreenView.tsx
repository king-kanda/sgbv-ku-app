import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InfoCard from '@/components/info';
import Card from '@/components/card';
import DocumentCard from '@/components/documentCard';


export default function AboutScreenView() {

    const documentsData = [
        {
          title: "KU Gender Policy",
          description: "Approved policy",
          icon: "file-pdf",
          category: "Policy",
        },
        {
          title: "KU SGBV Policy Brief",
          description: "Approved policy",
          icon: "file-pdf",
          category: "Policy",
        },
        {
          title: "Safe Spaces Map",
          description: "A map",
          icon: "file-pdf",
          category: "Map",
        },
        {
          title: "KU Genders Policy",
          description: "Approved policy",
          icon: "file-pdf",
          category: "Policy",
        },
      ];
      


  return (
    <SafeAreaView className='bg-white ' style={styles.container}>  
      <ScrollView>
        <View className="px-6">
            <View className='mt-6 flex flex-row items-center justify-center'>
                    <Image source={require('@/assets/images/logo.png')} style={{width: 120, height: 100}} />
            </View>

            <View className='mt-6'>
                <Text className="text-xl text-black font-bold ">
                    Kenyatta University is commited to achieving gender equity , equality and inclusivenes.
                </Text>
                <Text className='text-text text-sm mt-6 '>
                    The Centre is tasked with mainstreaming gender in all the University’s operations. The Centre’s activities are intended to create awareness of the gender dynamics and issues affecting the University such as Gender-Based Violence (GBV) and Sexual Harassment (SH); which if unaddressed, compromise service delivery. Ultimately, the expected result is improvement of relations and welfare of all staff and students at the University, where rights and privileges are respected and adhered to.
                </Text>
            </View>

            <View className='mt-8'>
                <Text className='font-bold text-text text-xl'> Useful documents</Text>
                {
                    documentsData.map((document)=>(
                        <DocumentCard 
                            key={document.title} 
                            name={document.title} 
                            summary={document.description}
                        />
                    ))
                }
            </View>
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

