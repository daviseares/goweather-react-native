import { styled } from '~/modules';
import { colors } from '~/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px 0;
  margin-right: 25px;
  align-self: flex-end;
`;

export const Logo = styled.Image`
  max-width: 175px;
  max-height: 30px;
`;

export const Sun = styled.Image`
  max-height: 310px;
  width: 420px;
`;

export const Title = styled.Text`
  line-height: 33px;
  width: 223px;
  font-size: 28px;
  color: ${colors.title};
  margin-left: 25px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 25px;
`;
