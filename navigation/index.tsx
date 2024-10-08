/**
 * Se você não está familiarizado com o React Navigation, consulte o guia "Fundamentals":
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";

// Define os tipos de navegação esperados pela aplicação
import { RootStackParamList } from "../types";

// Define um tema personalizado baseado no tema padrão do React Navigation
const theme = {
  ...DefaultTheme, // Herda todas as propriedades do tema padrão
  colors: {
    ...DefaultTheme.colors, // Copia todas as cores do tema padrão
    background: Colors.background, // Sobrescreve a cor de fundo para usar uma cor personalizada
  },
};

// Componente principal de navegação da aplicação
export default function Navigation() {
  return (
    // Envolve toda a aplicação no NavigationContainer, que é o provedor de navegação
    <NavigationContainer theme={theme}>
      {/* Renderiza o stack navigator raiz */}
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * Um stack navigator raiz é comumente usado para exibir modais sobre todo o conteúdo.
 * Neste caso, ele será usado para navegar entre as telas principais (Welcome, Login e Register).
 * Referência: https://reactnavigation.org/docs/modal
 */

// Cria o stack navigator com base na definição de tipos de RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>();

// Função que define a configuração do stack navigator
function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho padrão em todas as telas do stack
      }}
    >
      {/* Define as telas que fazem parte do stack navigator */}
      
      {/* Tela de Boas-vindas (Welcome) */}
      <Stack.Screen name="Welcome" component={Welcome} />
      
      {/* Tela de Login */}
      <Stack.Screen name="Login" component={LoginScreen} />
      
      {/* Tela de Registro */}
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
