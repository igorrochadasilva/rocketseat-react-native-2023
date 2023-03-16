import { StatusBar } from "expo-status-bar"
import { NativeBaseProvider } from "native-base"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"
import { THEME } from "@theme/index"
import { Loading } from "@components/Loading"
import { Routes } from "./src/routes"
import { AuthContextProvider } from "@contexts/AuthContext"

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
