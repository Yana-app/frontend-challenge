import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: ${(props) => props.theme.colors.secondary.muted.value};
  padding: 20px 24px;
  border-radius: 32px;
`;
