import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Platform } from "react-native";

import { Button } from "~components";
import { useAppDispatch } from "~store";

import { signUpSchema, type SignUpSchema } from "../schemas";
import { signUp } from "../slices";
import * as Styled from "./SignUpScreen.styled";

const defaultValues: SignUpSchema = {
  email: "",
  name: "",
  password: "",
};

const resolver = zodResolver(signUpSchema);

export const SignUpScreen: FC = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm({ defaultValues, resolver });

  const onSubmit: SubmitHandler<SignUpSchema> = (values) => {
    dispatch(signUp(values));
  };

  return (
    <Styled.Container
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <Styled.FormContainer>
        <Styled.Title align="center" size="lg" weight="bold">
          Regístrate
        </Styled.Title>
        <Styled.Input
          control={control}
          name="name"
          textInputProps={{
            placeholder: "Nombre de usuario",
            autoComplete: "name",
            autoCapitalize: "none",
          }}
        />
        <Styled.Input
          control={control}
          name="email"
          textInputProps={{
            placeholder: "Correo electrónico",
            keyboardType: "email-address",
            autoComplete: "email",
            autoCapitalize: "none",
            autoCorrect: false,
          }}
        />
        <Styled.Input
          control={control}
          name="password"
          textInputProps={{
            placeholder: "Contraseña",
            secureTextEntry: true,
            autoComplete: "password-new",
            autoCapitalize: "none",
          }}
        />
      </Styled.FormContainer>
      <Styled.ButtonContainer edges={["bottom"]}>
        <Button onPress={handleSubmit(onSubmit)}>Crear Cuenta</Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
