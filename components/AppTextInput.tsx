import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

// Componente de entrada de texto personalizado que herda as propriedades de TextInputProps
const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  // Estado para verificar se o campo está focado ou não
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <TextInput
      // Define o estado como true quando o campo é focado
      onFocus={() => setFocused(true)}
      // Define o estado como false quando o foco é perdido
      onBlur={() => setFocused(false)}
      // Define a cor do placeholder
      placeholderTextColor={Colors.darkText}
      // Define os estilos do campo de texto, com variações quando está focado
      style={[
        {
          fontFamily: Font["poppins-regular"],
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        // Aplica o estilo extra quando o campo está focado
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      // Recebe outras propriedades passadas para o componente
      {...otherProps}
    />
  );
};

export default AppTextInput;

// Estilo vazio que pode ser usado para adicionar estilos específicos no futuro
const styles = StyleSheet.create({});
