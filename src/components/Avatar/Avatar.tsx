import type { FC } from "react";

import { AvatarFallBack, AvatarFallBackProps } from "./AvatarFallback";
import { AvatarImage, AvatarImageProps } from "./AvatarImage";

type AvatarProps = AvatarImageProps & AvatarFallBackProps;

export const Avatar: FC<AvatarProps> = ({ source, ...props }) => {
  return source ? <AvatarImage source={source} {...props} /> : <AvatarFallBack {...props} />;
};
