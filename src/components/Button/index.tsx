import { FeatherIcons, RectButtonProperties, isEmpty } from '~/modules';
import { colors } from '~/theme';

import { ButtonText, IconContainer, Wrapper } from './styles';

type Props = RectButtonProperties & {
  children: string;
  icon?: keyof typeof FeatherIcons.glyphMap;
};

const Button = ({ children, icon, ...rest }: Props) => (
  <Wrapper {...rest}>
    <ButtonText>{children}</ButtonText>
    <IconContainer>
      {!isEmpty(icon) && (
        <FeatherIcons name={icon} color={colors.buttonText} size={30} />
      )}
    </IconContainer>
  </Wrapper>
);

export default Button;
