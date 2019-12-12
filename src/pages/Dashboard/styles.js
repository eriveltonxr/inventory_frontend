import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background: #fff;
  border: 1px solid #2e6ca4;
  border-radius: 5px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 20px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #2e6ca4;
      margin: 0 0 10px;
      text-align: center;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #2e6ca4;
      margin: 0 0 10px;
      font-size: 14px;
    }

    h1 {
      text-align: center;
      color: #2e6ca4;
      margin: 0 0 10px;
      font-size: 16px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  margin: 15px 0 0;
  height: 44px;
  border: 0;
  background: #2e6ca4;
  border-radius: 8px;
  font-weight: bold;
  height: 44px;
  padding: 0 15px;
  color: white;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#2e6ca4')};
  }
  ${props =>
    props.loginLoading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
