import {
  createMaterialTopTabNavigator,
  type MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { type FC, useMemo } from "react";
import { useTheme } from "styled-components/native";

import { AccountScreen } from "~features/auth/screens";
import { ChatScreen } from "~features/chat/screens";

type AuthStackParamList = {
  Chat: undefined;
  Account: undefined;
};

const Stack = createMaterialTopTabNavigator<AuthStackParamList>();

export const AuthNavigator: FC = () => {
  const theme = useTheme();

  const screenOptions: MaterialTopTabNavigationOptions = useMemo(() => {
    return {
      tabBarLabelStyle: {
        textTransform: "none",
        fontSize: 16,
        lineHeight: 24,
        fontStyle: "normal",
        fontWeight: "700",
      },
      tabBarActiveTintColor: theme.colors.primary.main.value,
      tabBarInactiveTintColor: theme.colors.text.muted,
      tabBarIndicatorStyle: { height: 5 },
    };
  }, [theme]);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Chat" component={ChatScreen} options={{ title: "Chat" }} />
      <Stack.Screen name="Account" component={AccountScreen} options={{ title: "Cuenta" }} />
    </Stack.Navigator>
  );
};
