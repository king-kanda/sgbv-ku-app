import React ,{useState , useEffect} from "react";
import SplashScreenView from "./splashScreenView";
import HomeScreenView from "./homeScreenView";

export default function Index() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
    {isLoading ? <SplashScreenView /> : <HomeScreenView />}
    </>
  )

}
