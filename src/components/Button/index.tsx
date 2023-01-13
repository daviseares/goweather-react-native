import { FC } from 'react';
import { FeatherIcons, RectButtonProperties, isEmpty } from '~/modules';
import { colors } from '~/theme';

import { ButtonText, IconContainer, Wrapper } from './styles';

type ButtonProps = RectButtonProperties & {
  children: string;
  icon?: keyof typeof FeatherIcons.glyphMap;
};

const Button: FC<ButtonProps> = ({ children, icon, ...rest }) => (
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
