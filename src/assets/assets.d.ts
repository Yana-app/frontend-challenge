declare module "*.svg" {
  import React, { type FC } from "react";
  import { type SvgProps } from "react-native-svg";
  const content: FC<SvgProps>;
  export default content;
}
