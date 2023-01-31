import { Message, Spinner, Wrapper } from './styles';

type Props = {
  children: string;
};

const Loading = ({ children }: Props) => (
  <Wrapper>
    <Spinner animating />
    <Message>{children}</Message>
  </Wrapper>
);

export default Loading;
