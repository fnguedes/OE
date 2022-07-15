import Routes from "./src/routes"
import {NavigationContainer} from '@react-navigation/native'
import { useFonts } from "expo-font";
import { DancingScript_600SemiBold } from "@expo-google-fonts/dancing-script";
import { Courgette_400Regular } from "@expo-google-fonts/courgette";
import { Merriweather_900Black } from "@expo-google-fonts/merriweather";
import { Cinzel_400Regular } from "@expo-google-fonts/cinzel";
import { Rubik_400Regular_Italic } from "@expo-google-fonts/rubik";
import { Unna_400Regular } from "@expo-google-fonts/unna";
import { Tinos_400Regular } from "@expo-google-fonts/tinos";
import { Parisienne_400Regular } from "@expo-google-fonts/parisienne";
import AppLoading from "expo-app-loading/build/AppLoading";


export default function App() {

  let [fontsLoaded] = useFonts({
    DancingScript_600SemiBold,Courgette_400Regular,
    Merriweather_900Black,Cinzel_400Regular,
    Rubik_400Regular_Italic,Tinos_400Regular,Unna_400Regular,
    Parisienne_400Regular
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


