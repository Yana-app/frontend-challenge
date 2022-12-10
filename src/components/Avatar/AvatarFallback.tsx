import styled from "styled-components/native";

import { avatarSizes, type BaseAvatarProps } from "./common";

export interface AvatarFallBackProps extends BaseAvatarProps {
  fallbackColor?: string;
}

export const AvatarFallBack = styled.View<AvatarFallBackProps>`
  background-color: ${(props) => props.fallbackColor};
  width: ${(props) => avatarSizes[props.size!] + "px"};
  height: ${(props) => avatarSizes[props.size!] + "px"};
  border-radius: ${(props) => avatarSizes[props.size!] / 2 + "px"};
`;

AvatarFallBack.defaultProps = {
  fallbackColor: "#C4C4C4",
};
