import React from 'react';
import { Message, Spinner, Wrapper } from './styles';

type Props = {
  children: string;
};

const Loading: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <Spinner animating />
    <Message>{children}</Message>
  </Wrapper>
);

export default Loading;
