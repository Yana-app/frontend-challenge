import * as Yup from "yup";

const preventMessages = {
  isRequired: "El campo es requerido",
  onlyLettersAndSpaces: "Solamente se pueden ingresar letras",
  invalidEmail: "Ingresa un email válido",
  invalidChatacter: "El password debe de contener mínimo 7 caracteres",
};

export const inputValidators = Yup.object().shape({
  name: Yup.string()
    .required(preventMessages.isRequired)
    .matches(/^[aA-zZ\s]+$/, preventMessages.onlyLettersAndSpaces),
  email: Yup.string()
    .email(preventMessages.invalidEmail)
    .required(preventMessages.isRequired),
  password: Yup.string()
    .min(7, preventMessages.invalidChatacter)
    .required(preventMessages.isRequired),
});
