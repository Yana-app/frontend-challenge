import type { FC } from "react";
import { Alert } from "react-native";

import { Text, Button } from "~components";
import { useGetAvatar } from "~hooks";
import { useAppDispatch, useAppSelector } from "~store";

import { signOut } from "../slices";
import * as Styled from "./AccountScreen.styled";

export const AccountScreen: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handlePress = () => {
    Alert.alert("¿Quieres cerrar tu sesión?", "Todos tus mensajes se borrarán", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Cerrar sesión",
        onPress: () => dispatch(signOut()),
        style: "destructive",
      },
    ]);
  };

  return (
    <>
      <Styled.ProfileContainer>
        <Styled.Avatar size="lg" source={useGetAvatar("user")} />
        <Styled.ProfileSection>
          <Text align="center" color="muted" size="xs" weight="bold">
            Nombre de usuario
          </Text>
          <Text align="center" weight="bold">
            {user!.name}
          </Text>
        </Styled.ProfileSection>
        <Styled.ProfileSection>
          <Text align="center" color="muted" size="xs" weight="bold">
            Correo electrónico
          </Text>
          <Text align="center" weight="bold">
            {user!.email}
          </Text>
        </Styled.ProfileSection>
      </Styled.ProfileContainer>
      <Styled.ButtonContainer edges={["bottom"]}>
        <Button isFullWidth variant="subtle" onPress={handlePress}>
          Cerrar Sesión
        </Button>
      </Styled.ButtonContainer>
    </>
  );
};
