import React from 'react';
import { Container, Texto } from './styles';

export default Title = props => {
  return (
    <Container>
      <Texto>{props.title}</Texto>
    </Container>
  );
};
