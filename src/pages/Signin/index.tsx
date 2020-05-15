import React from 'react';

import { FiLogIn as Icon } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import * as S from './styled';

const Signin: React.FC = () => {
  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.LoginLogo src={logo} alt="GoBarber logo" />
        <S.LoginForm>
          <S.LoginFormTitle>Faça seu logon</S.LoginFormTitle>
          <S.LoginFormInput placeholder="E-mail" />
          <S.LoginFormInput type="password" placeholder="Senha" />
          <S.LoginFormButton type="submit">Entrar</S.LoginFormButton>
          <S.LoginFormForgetPassword href="#">
            Esqueci minha senha
          </S.LoginFormForgetPassword>
          <S.LoginFormCreateAccount href="#">
            <Icon />
            Criar conta
          </S.LoginFormCreateAccount>
        </S.LoginForm>
      </S.LoginContainer>
      <S.LoginImage />
    </S.LoginWrapper>
  );
};

export default Signin;
