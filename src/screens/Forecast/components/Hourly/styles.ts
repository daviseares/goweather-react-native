import { styled } from '~/modules';
import { FastImage } from '~/modules';
import { colors } from '~/theme';

export const Wrapper = styled.View`
  margin-top: 20px;
`;

export const Card = styled.View`
  width: 100px;
  border-radius: 5px;
  background: ${colors.card};
  padding: 10px 0px;
  margin-right: 15px;
  height: 170px;

  align-items: center;
  justify-content: space-between;
`;

export const Hour = styled.Text`
  color: ${colors.title};
  font-size: 16px;
`;

export const Icon = styled(FastImage)`
  width: 69px;
  height: 69px;
`;

export const Temperature = styled.Text`
  color: ${colors.title};
  font-size: 16px;
`;

export const Description = styled.Text`
  color: ${colors.title};
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;
