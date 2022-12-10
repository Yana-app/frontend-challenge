import type { ImageProps } from "react-native";
import styled from "styled-components/native";

import { avatarSizes, type BaseAvatarProps } from "./common";

export type AvatarImageProps = BaseAvatarProps & ImageProps;

export const AvatarImage = styled.Image<AvatarImageProps>`
  width: ${(props) => avatarSizes[props.size!] + "px"};
  height: ${(props) => avatarSizes[props.size!] + "px"};
  border-radius: ${(props) => avatarSizes[props.size!] / 2 + "px"};
`;
