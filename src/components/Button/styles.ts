import { RectButton, styled } from '~/modules';
import { colors } from '~/theme';

export const Wrapper = styled(RectButton)`
  height: 50px;
  background-color: ${colors.button};
  border-radius: 5px;
  margin: 0 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.buttonText};
  font-size: 18px;
`;

export const IconContainer = styled.View`
  position: absolute;
  right: 30px;
`;
