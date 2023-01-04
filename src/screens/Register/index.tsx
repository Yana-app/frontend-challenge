import type { FC } from "react";
import styled from "styled-components/native";
import { View, Platform } from "react-native";
import { Button, Input } from "~components";
import { useAppDispatch } from "~store";
import type { User, UserSchema } from "~interfaces";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Formik } from "formik";
import { inputValidators } from "./inputValidator";
import { signIn } from "../../store/slices";
import { nanoid } from "@reduxjs/toolkit";

const MainContainer = styled.KeyboardAvoidingView`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 32px 24px;
  width: 100%;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 36px;
  text-align: center;
`;

const ButtonContainer = styled.View`
  width: 100%;
`;

export const Register: FC = () => {
  const { bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const createUser = (values: UserSchema) => {
    const dataUser: User = {
      id: nanoid(),
      name: values.name,
      email: values.email,
    };

    dispatch(signIn(dataUser));
  };

  return (
    <MainContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={inputValidators}
        onSubmit={(values) => createUser(values)}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
          <>
            <View>
              <Title>Regístrate</Title>
              <Input
                onChangeText={handleChange("name")}
                value={values.name}
                error={errors.name}
                placeholder="Nombre de usuario"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                onBlur={handleBlur}
              />
              <Input
                onChangeText={handleChange("email")}
                value={values.email}
                error={errors.email}
                keyboardType="email-address"
                placeholder="Correo electrónico"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                onBlur={handleBlur}
              />
              <Input
                onChangeText={handleChange("password")}
                value={values.password}
                error={errors.password}
                secureTextEntry={true}
                placeholder="Contraseña"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                onBlur={handleBlur}
              />
            </View>
            <ButtonContainer
              style={{
                paddingBottom: bottom + 12,
              }}
            >
              <Button
                onPress={() => handleSubmit()}
                text="Crear cuenta"
                bgColor="#ff8755"
                textColor="#672a11"
              />
            </ButtonContainer>
          </>
        )}
      </Formik>
    </MainContainer>
  );
};
