import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Chat, Profile } from "./components";
import type { FC } from "react";

const Tab = createMaterialTopTabNavigator();

export const Home: FC = () => {
  const tabStyled = {
    screenOptions: {
      tabBarActiveTintColor: "#ff8755",
      tabBarInactiveTintColor: "rgba(0, 0, 0, 0.5)",
      tabBarIndicatorStyle: {
        backgroundColor: "#ff8755",
        height: 5,
      },
      tabBarLabelStyle: {
        fontSize: 16,
        textTransform: "capitalize" as any,
      },
      tabBarStyle: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
    },
    sceneContainerStyle: {
      backgroundColor: "white",
    },
  };

  return (
    <Tab.Navigator {...tabStyled}>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Cuenta" component={Profile} />
    </Tab.Navigator>
  );
};
