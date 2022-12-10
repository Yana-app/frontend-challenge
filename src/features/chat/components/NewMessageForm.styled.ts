import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { FormControl, ReactHookFormInput as BaseReactHookFormInput } from "~components";

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px 16px 16px;
`;

export const Input = styled(BaseReactHookFormInput)`
  flex: 1;
  margin-right: 16px;
`;

export const ElevatedInput = styled(FormControl.TextInput)`
  background-color: ${(props) => props.theme.colors.background.main};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
`;
