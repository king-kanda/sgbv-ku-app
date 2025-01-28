import React ,{useState , useEffect} from "react";
import SplashScreenView from "./splashScreenView";
import { useRouter } from "expo-router";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter(); // Use router for navigation

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
          router.replace("/(tabs)/homeScreenView"); // Navigate to home tab
      }, 3000);
  }, []);

  return isLoading ? <SplashScreenView /> : null;
}