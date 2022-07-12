import Routes from "./src/routes"
import {NavigationContainer} from '@react-navigation/native'
import { useFonts } from "expo-font";
import { DancingScript_600SemiBold } from "@expo-google-fonts/dancing-script";
import { Courgette_400Regular } from "@expo-google-fonts/courgette";
import AppLoading from "expo-app-loading/build/AppLoading";

export default function App() {

  let [fontsLoaded] = useFonts({
    DancingScript_600SemiBold,Courgette_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
     return (
      
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      );
}


