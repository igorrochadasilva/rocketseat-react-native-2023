import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"
import { Box, useTheme } from "native-base"
import { useAuth } from "@hooks/useAuth"
import { Loading } from "@components/Loading"

export function Routes() {
  const { user, isLoadingUserStorageData } = useAuth()
  const { colors } = useTheme()

  console.log("USUÁRIO LOGADO =>", user)

  const theme = DefaultTheme
  theme.colors.background = colors.gray[700]

  if (isLoadingUserStorageData) {
    return <Loading />
  }

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  )
}
