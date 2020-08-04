import styled from "styled-components";
import { FiCamera } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const PhotoPickerContainer = styled.div`
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px 1px 3px -1px #000;
  border-radius: 8px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const PhotoPicker = styled.div`
  border-radius: 50%;
  border: 1px solid #000;
  height: 160px;
  width: 160px;
  align-self: center;
  margin: 16px auto;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Camera = styled(FiCamera)`
  cursor: pointer;
`;

export const TextInput = styled.div`
  padding: 0 8px;
  border: 1px solid #6a676b;
  border-radius: 4px;
  width: 300px;
  height: 28px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  input {
    border: none;

    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  border: none;
  border-radius: 8px;
  background-color: #6a676b;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  padding: 8px;

  &:hover {
    opacity: 0.6;
    transition: 0.6s;
  }

  &:active {
    border: none;
  }
`;
