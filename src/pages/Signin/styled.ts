import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroungImg from '../../assets/sign-in-background.png';

export const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

export const LoginLogo = styled.img``;

export const LoginForm = styled.form`
  display: flex;

  margin: 80px 0;
  width: 340px;
  text-align: center;
  flex-direction: column;
`;

export const LoginFormTitle = styled.h1`
  margin-bottom: 24px;
`;

export const LoginFormInput = styled.input`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #f4ede8;

  &::placeholder {
    color: #666360;
  }

  &:not(:first-child) {
    margin-top: 8px;
  }
`;

export const LoginFormButton = styled.button`
  background: #ff9000;
  border-radius: 10px;
  height: 56px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  margin-top: 16px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

export const LoginFormForgetPassword = styled.a`
  color: #f4ede8;
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const LoginFormCreateAccount = styled.a`
  color: #ff9000;
  display: block;
  margin-top: 32px;
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }

  > svg {
    margin-right: 16px;
  }
`;

export const LoginImage = styled.div`
  flex: 1;
  background: url(${signInBackgroungImg}) no-repeat center;
  background-size: cover; /* Preencher o espaço que sobra */
`;
