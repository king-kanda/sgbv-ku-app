import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}>
        
        <Tabs.Screen
          name="homeScreenView"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Feather name="home" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="reporting"
          options={{
            title: 'Stay Safe',
            tabBarIcon: ({ color }) => <Feather size={24} name="shield" color={color} />,
          }}
        />
        <Tabs.Screen
          name="aboutScreenView"
          options={{
            title: 'info',
            tabBarIcon: ({ color }) => <Feather size={24} name="info" color={color} />,
          }}
        />
        <Tabs.Screen
          name="Filed reports"
          options={{
            title: 'Reports',
            tabBarIcon: ({ color }) => <Feather size={24} name="inbox" color={color} />,
          }}
        />
         <Tabs.Screen
          name="index"
          options={{
            // tabBarStyle : { display : 'none' }
          }}
        />
    </Tabs>
  );
}
