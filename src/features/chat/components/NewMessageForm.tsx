import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm, type SubmitHandler, type Mode } from "react-hook-form";

import { IconButton } from "~components";
import SendIcon from "~icons/send.svg";
import { useAppDispatch, useAppSelector } from "~store";

import { type NewMessageSchema, newMessageSchema } from "../schemas";
import { addUserMessage } from "../slices";
import * as Styled from "./NewMessageForm.styled";

const defaultValues: NewMessageSchema = {
  message: "",
};

const resolver = zodResolver(newMessageSchema);
const mode: Mode = "onChange";

export const NewMessageForm: FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm({
    defaultValues,
    resolver,
    mode,
  });

  const onSubmit: SubmitHandler<NewMessageSchema> = (values) => {
    dispatch(
      addUserMessage({
        content: values.message,
        sender: user!.name,
      })
    );

    reset();
  };

  return (
    <Styled.Container edges={["bottom"]}>
      <Styled.Input
        control={control}
        name="message"
        showHelperText={false}
        textInputProps={{ placeholder: "Ingresa aquí tu mensaje" }}
        Input={Styled.ElevatedInput}
      />
      <IconButton disabled={!isValid} size="lg" Icon={SendIcon} onPress={handleSubmit(onSubmit)} />
    </Styled.Container>
  );
};
