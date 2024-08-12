import styled from "styled-components";

export default function InputForm() {
  const step = {
    password: true,
    cvc: true,
    userName: true,
    expiryDate: true,
    cardCompany: true,
  };
  return (
    <InputFormContainer>
      {step["password"] && <InputField />}
      {step["cvc"] && <InputField />}
      {step["userName"] && <InputField />}
      {step["expiryDate"] && <InputField />}
      {step["cardCompany"] && <InputField />}
      <InputField />
    </InputFormContainer>
  );
}

const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 70%;
`;
