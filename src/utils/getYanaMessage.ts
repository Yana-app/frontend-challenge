import type { IMessage } from "~interfaces";
import { nanoid } from "@reduxjs/toolkit";

export const getYanaMessage = (): IMessage => {
  return {
    id: nanoid(),
    message: "Hola humano, ¿Cómo estás?",
    isPrimary: true,
  };
};
