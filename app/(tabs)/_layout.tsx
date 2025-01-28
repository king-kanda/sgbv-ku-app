import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';


export default function RootLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle :{
        height: 60,
        paddingBottom: 10,
        paddingTop: 3,
        elevation: 20,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "semibold",
    },
    
    }}>
        <Tabs.Screen
          name="homeScreenView"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
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
          name="reports"
          options={{
            title: 'Filed Reports',
            tabBarIcon: ({ color }) => <Feather size={24} name="inbox" color={color} />,
          }}
        />
    </Tabs>
  );
}


// import "../global.css";