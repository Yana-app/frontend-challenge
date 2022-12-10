import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { ReactHookFormInput, Text } from "~components";

export const Container = styled.KeyboardAvoidingView`
  background-color: ${(props) => props.theme.colors.background.main};
  flex: 1;
  justify-content: space-between;
`;

export const FormContainer = styled.ScrollView`
  padding: 0 24px 32px;
`;

export const Title = styled(Text)`
  margin-top: 48px;
  margin-bottom: 48px;
`;

export const Input = styled(ReactHookFormInput)`
  margin-bottom: 12px;
`;

export const ButtonContainer = styled(SafeAreaView)`
  padding: 12px 24px 32px;
`;
