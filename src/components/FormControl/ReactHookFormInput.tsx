import type { FC } from "react";
import { Controller, type Control } from "react-hook-form";
import { View, type TextInputProps, type ViewProps } from "react-native";
import { useTheme } from "styled-components";

import { FormControl } from "./FormControl";

// TODO: Refactor to remove any typing
export interface ReactHookFormInputProps extends ViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  textInputProps?: TextInputProps;
  showHelperText?: boolean;
  Input?: typeof FormControl.TextInput;
}

export const ReactHookFormInput: FC<ReactHookFormInputProps> = ({
  control,
  name,
  textInputProps,
  showHelperText,
  Input = FormControl.TextInput,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View {...props}>
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={theme.colors.text.muted}
            {...textInputProps}
          />
          {showHelperText && error && (
            <FormControl.HelperText variant="error">{error.message}</FormControl.HelperText>
          )}
        </View>
      )}
    />
  );
};

ReactHookFormInput.defaultProps = {
  showHelperText: true,
};
