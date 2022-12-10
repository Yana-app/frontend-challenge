import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { Avatar as BaseAvatar } from "~components";

export const ProfileContainer = styled.ScrollView`
  padding: 0 32px 24px;
`;

export const Avatar = styled(BaseAvatar)`
  margin-top: 48px;
  margin-bottom: 48px;
  align-self: center;
`;

export const ProfileSection = styled.View`
  margin-bottom: 32px;
`;

export const ButtonContainer = styled(SafeAreaView)`
  padding: 16px 24px 32px;
`;
