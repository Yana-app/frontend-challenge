import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Register } from "~screens";
import { RootState, useAppSelector } from "~store";
import { SafeAreaView } from "react-native";
import type { FC } from "react";

//TODO Create Theme with ReactNavigation - StyledComponents
const Stack = createNativeStackNavigator();

const SafeArea: FC = () => <SafeAreaView />;

export const MainNavigator: FC = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: SafeArea }}>
        {!user ? (
          <Stack.Screen name="Register" component={Register} />
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
