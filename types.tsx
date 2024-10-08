/**
 * Aprenda mais sobre o uso do TypeScript com o React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

// Importa o tipo NativeStackScreenProps do React Navigation.
// Este tipo é usado para definir as propriedades de navegação de uma tela em uma pilha de navegação nativa.
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Declaração de um namespace global para estender as definições do React Navigation.
// Isso permite adicionar o tipo RootParamList ao namespace ReactNavigation.
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Define um tipo para os parâmetros aceitos pelas telas na pilha de navegação RootStack.
// Cada tela na pilha (ex.: Welcome, Login, Register) está listada como uma chave no objeto RootStackParamList,
// e seu valor é `undefined`, indicando que a navegação para essas telas não requer parâmetros.
export type RootStackParamList = {
  Welcome: undefined; // Tela de boas-vindas, sem parâmetros necessários.
  Login: undefined;   // Tela de login, sem parâmetros necessários.
  Register: undefined; // Tela de registro, sem parâmetros necessários.
};

// Define um tipo para as propriedades das telas na pilha RootStack.
// Aqui, `Screen` é uma tela específica na pilha, e as propriedades retornadas
// pela função NativeStackScreenProps correspondem a essa tela.
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
