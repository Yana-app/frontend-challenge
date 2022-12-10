import type { FC } from "react";

import { Text } from "~components";
import { useGetAvatar } from "~hooks";

import * as Styled from "./NoMessages.styled";

export const NoMessages: FC = () => {
  return (
    <Styled.Container>
      <Styled.Avatar size="lg" source={useGetAvatar("yana")} />
      <Text align="center">No hay mensajes aún</Text>
      <Text align="center" color="muted">
        Intenta escribiendo debajo
      </Text>
    </Styled.Container>
  );
};
