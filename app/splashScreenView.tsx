import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function splashScreenView() {
  return (
    <SafeAreaView className='bg-navy' style={styles.container}>
        <View>
            {/* empty space */}
        </View>
        <View>
            {/* logo and a loader  */}
             <Image source={require('../assets/images/logo.png')} style={{ width: 100, height: 100 }} />
        </View>
       

       <View className='w-2/3 mb-10'>
            <Text className='text-dark-text text-center text-xs'>Brought to you by the Centre for Gender Equity & Empowerment</Text>
       </View>
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})