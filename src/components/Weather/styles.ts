import { styled } from '~/modules';
import { colors } from '~/theme';

export const Wrapper = styled.View`
  margin: 0 25px 20px 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.title};
`;

export const DateInfo = styled.Text`
  font-size: 18px;
  color: ${colors.title};
`;

export const Card = styled.View`
  background: ${colors.card};
  border-radius: 5px;
  height: 120px;
  margin-top: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CardLeft = styled.View`
  align-items: center;
`;

export const WeatherTitle = styled.Text`
  font-size: 14px;
  color: ${colors.title};
`;

export const Temperature = styled.Text`
  font-size: 48px;
  color: ${colors.title};
`;

export const Address = styled.Text`
  font-size: 18px;
  color: ${colors.title};
`;
