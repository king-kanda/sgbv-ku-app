import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false
  }} />;
}


// import { Stack } from 'expo-router/stack';

// export default function Layout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }
