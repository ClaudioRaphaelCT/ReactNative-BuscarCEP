import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CepInput = styled.TextInput`
  width: 250px;
  height: 50px;
  margin-top: 30px;
  border-width: 1px;
  border-color: #000;
  border-radius: 15px;
`;

export const CepTexto = styled.Text`
  margin-top: 10px;
`;

export const BuscarCep = styled.TouchableOpacity`
  margin-top: 20px;
  margin-right: 10px;
  background-color: #800080;
  border-radius: 20px;
  align-items: center;
  height: 40px;
  width: 120px;
`;

export const BuscarCepText = styled.Text`
  padding: 10px;
  color: #ffffff;
  height: 50px;
  font-size: 18px;
`;

export const ApagarInputCep = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #778899;
  border-radius: 20px;
  align-items: center;
  height: 40px;
  width: 120px;
`;

export const ApagarInputText = styled.Text`
  padding: 10px;
  color: #ffffff;
  height: 50px;
  font-size: 18px;
`;

export const ContainerResultado = styled.View`
  margin-top: 30px;
`;

export const TextoResultado = styled.Text`
  text-align: center;
  margin-top: 5px;
  font-style: italic;
  font-size: 20px;
`;
