import styled from "styled-components/native";
import type { FC } from "react";
import SendIcon from "~assets/send_icon.svg";
import { useState } from "react";
import { useAppDispatch } from "~store";
import { addMessage } from "../../../../../../store/slices/chat";

const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 32px;
`;

const MessageInputContainer = styled.View`
  background-color: #ffffff;
  border-radius: 28px;
  flex: 1;
  justify-content: center;
  margin-right: 16px;
`;

const shadowBorder = {
  style: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

const MessageInput = styled.TextInput`
  border-radius: 28px;
  padding: 16px 24px;
`;

const SendButtonContainer = styled.View`
  display: flex;
`;

const SendButton = styled.TouchableOpacity`
  align-items: center;
  background: ${({ disabled }) => (disabled ? "#c4c4c4" : "#ff8755")};
  border-radius: 28px;
  display: flex;
  height: 56px;
  justify-content: center;
  width: 56px;
`;

export const OutputMessageTab: FC = () => {
  const [message, setMesage] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(addMessage(message));
    setMesage("");
  };

  return (
    <MainContainer>
      <MessageInputContainer {...shadowBorder}>
        <MessageInput
          onChangeText={(text) => setMesage(text)}
          value={message}
          multiline
          placeholder="Ingresa aquí tu mensaje"
        />
      </MessageInputContainer>
      <SendButtonContainer>
        <SendButton onPress={handleSubmit} disabled={message === ""}>
          <SendIcon />
        </SendButton>
      </SendButtonContainer>
    </MainContainer>
  );
};
