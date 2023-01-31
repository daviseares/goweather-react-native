import { styled } from '~/modules';
import { colors } from '~/theme';

export const Wrapper = styled.View`
  margin: 20px 25px 0 25px;
`;

export const Card = styled.View`
  height: 185px;
  background: ${colors.card};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Top = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Down = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.title};
`;

export const Value = styled.Text`
  font-size: 20px;
  color: ${colors.title};
`;
