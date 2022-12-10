import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";

import { SignUpScreen } from "~features/auth/screens";

type PublicStackParamList = {
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<PublicStackParamList>();

export const PublicNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
