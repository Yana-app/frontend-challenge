import type { FC } from "react";
import type { SvgProps } from "react-native-svg";

import {
  IconButtonContainer,
  iconButtonSizes,
  type IconButtonContainerProps,
} from "./IconButtonContainer";

interface IconButtonProps extends IconButtonContainerProps {
  Icon: FC<SvgProps>;
}

export const IconButton: FC<IconButtonProps> = ({ Icon, size, ...props }) => {
  return (
    <IconButtonContainer activeOpacity={0.75} size={size} {...props}>
      <Icon width={iconButtonSizes[size!].icon} height={iconButtonSizes[size!].icon} />
    </IconButtonContainer>
  );
};

IconButton.defaultProps = {
  size: "md",
  color: "primary",
  variant: "solid",
};
