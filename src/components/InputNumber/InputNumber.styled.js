import styled from "@emotion/styled";

export const InputContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 300px;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;

  font-size: 2rem;
  text-align: center;

  border-radius: 10px;
  border: none;
  outline: none;

  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 15px 25px;

  border: none;
  border-radius: 160px;
  background: #198c36;
  cursor: pointer;

  transition: background-color 500ms, color 500ms;

  &:hover {
    color: #ffffff;
    background-color: #88a270;
  }
`;
