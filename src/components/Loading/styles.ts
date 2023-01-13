import { styled } from '~/modules';
import { colors } from '~/theme';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${colors.title};
  font-size: 18px;
  margin-top: 10px;
`;
export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.button,
})``;
