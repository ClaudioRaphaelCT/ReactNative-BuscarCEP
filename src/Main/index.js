import React, { useRef, useState } from 'react';
import {
  Container,
  CepInput,
  CepTexto,
  BuscarCep,
  BuscarCepText,
  ContainerResultado,
  TextoResultado,
  ApagarInputCep,
  ApagarInputText,
  InputContainer,
} from './styles';
import api from '../service/service';
import { Keyboard } from 'react-native';

export default Main = props => {
  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState(null);
  const inputRef = useRef(null);

  const capturarCep = async () => {
    if (cep === '') {
      alert('Digite um CEP válido');
      setCep('');
      return;
    }
    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log(`ERROR ${error}`);
    }
  };

  const limparInput = () => {
    setCep('');
    inputRef.current.focus();
  };

  return (
    <Container>
      <CepInput ref={inputRef} keyboardType="numeric" placeholder="DIGITE AQUI" onChangeText={text => setCep(text)} />
      <InputContainer>
        <BuscarCep>
          <BuscarCepText onPress={capturarCep}>BUSCAR CEP</BuscarCepText>
        </BuscarCep>
        <ApagarInputCep>
          <ApagarInputText onPress={limparInput}>APAGAR</ApagarInputText>
        </ApagarInputCep>
      </InputContainer>
      <ContainerResultado>
        <TextoResultado>CEP: {cepUser ? cepUser.cep : ''} </TextoResultado>
        <TextoResultado>Logradouro: {cepUser ? cepUser.logradouro : ''} </TextoResultado>
        <TextoResultado>Bairro: {cepUser ? cepUser.bairro : ''} </TextoResultado>
        <TextoResultado>Localidade: {cepUser ? cepUser.localidade : ''} </TextoResultado>
        <TextoResultado>UF: {cepUser ? cepUser.uf : ''} </TextoResultado>
      </ContainerResultado>
    </Container>
  );
};
