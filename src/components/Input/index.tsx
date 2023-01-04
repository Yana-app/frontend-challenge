import styled from "styled-components/native";
import { type TextInputProps, View } from "react-native";
import { FC, useState, useEffect } from "react";

interface CustomViewProps extends TextInputProps {
  error?: string | boolean;
}

type CustomInputType = CustomViewProps;

const InputStyled = styled.TextInput<CustomInputType>`
  background: #f0f6fa;
  border-color: ${({ error }) => (error ? "#e11900" : "")};
  border-radius: 32px;
  border-width: ${({ error }) => (error ? "1px" : "0")};
  font-size: 16px;
  height: 64px;
  line-height: 24px;
  margin: 12px 0;
  min-width: 100%;
  padding: 0 20px;
`;

const ErrorMessage = styled.Text`
  color: #e11900;
  text-align: center;
`;

export const Input: FC<CustomViewProps> = ({
  error,
  onChangeText,
  value,
  placeholder,
  placeholderTextColor,
  keyboardType,
  secureTextEntry,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const isAnError = error && error !== "" ? true : false;
    setHasError(isAnError);
  }, [error]);

  return (
    <View>
      <InputStyled
        error={hasError}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        keyboardType={keyboardType}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
      />
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
};
