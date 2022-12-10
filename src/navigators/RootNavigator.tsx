import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type FC, useMemo } from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "styled-components";

import { useAppSelector } from "~store";
import { themeToNavigationTheme } from "~theme";

import { AuthNavigator } from "./AuthNavigator";
import { PublicNavigator } from "./PublicNavigator";

type RootStackParamList = {
  Public: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Header: FC = () => <SafeAreaView />;

export const RootNavigator: FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const theme = useTheme();

  const navigationTheme = useMemo(() => {
    return themeToNavigationTheme(theme);
  }, [theme]);

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{ header: Header }}>
        {!user ? (
          <Stack.Screen
            name="Public"
            component={PublicNavigator}
            options={{ animationTypeForReplace: "pop" }}
          />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
