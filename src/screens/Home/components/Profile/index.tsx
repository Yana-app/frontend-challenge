import type { FC } from "react";
import { Button, EmptyState } from "~components";
import styled from "styled-components/native";
import { useGetAvatar } from "~hooks";
import { type RootState, useAppSelector, useAppDispatch } from "~store";
import { closeSession } from "../../../../store/slices/auth";
import { useState } from "react";
import { Modal } from "react-native";

const MainContainer = styled.View`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 32px 24px;
  width: 100%;
`;

const ContentContainer = styled.View`
  align-items: center;
  display: flex;
  padding: 24px;
`;

const ProfileImageContainer = styled.View`
  border-radius: 48px;
  height: 96px;
  margin-bottom: 48px;
  width: 96px;
`;

const ProfileImage = styled.Image`
  border-radius: 48px;
  height: 96px;
  width: 96px;
`;

const LabelContainer = styled.View`
  margin-bottom: 32px;
`;

const Label = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  line-height: 24px;
  text-align: center;
`;

const LabelContent = styled.Text`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const Profile: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const userAvatar = useGetAvatar("user");
  const user = useAppSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  return (
    <MainContainer>
      <ContentContainer>
        <Modal animationType="slide" transparent={true} visible={modal}>
          <EmptyState
            bgColor="rgba(0,0,0,0.3)"
            text="¿Realmente deseas cerrar sesión?"
          >
            <Button
              style={{
                marginBottom: 12,
              }}
              onPress={() => setModal(false)}
              text="Cancelar"
              bgColor="#FFC5C5"
              textColor="#671111"
            />
            <Button
              onPress={() => dispatch(closeSession())}
              text="Cerrar Sesión"
              bgColor="#e9e9e9e9"
              textColor="#000000"
            />
          </EmptyState>
        </Modal>
        <ProfileImageContainer>
          <ProfileImage source={userAvatar} />
        </ProfileImageContainer>
        <LabelContainer>
          <Label>Nombre de usuario</Label>
          <LabelContent>{user?.name}</LabelContent>
        </LabelContainer>
        <LabelContainer>
          <Label>Correo electrónico</Label>
          <LabelContent>{user?.email}</LabelContent>
        </LabelContainer>
      </ContentContainer>
      <Button
        onPress={() => setModal(true)}
        text="Cerrar Sesión"
        bgColor="#FFC5C5"
        textColor="#671111"
      />
    </MainContainer>
  );
};
