import React, { FC } from 'react';
import { View } from 'react-native';
import { LogoImage, SunImage } from '~/assets';
import { Button } from '~/components';
import { Footer, Header, Logo, Sun, Title, Wrapper } from './styles';

type Props = {
  handleNavigate(): void;
};

const Start: FC<Props> = ({ handleNavigate }) => (
  <Wrapper>
    <Header>
      <Logo source={LogoImage} />
    </Header>
    <View>
      <Sun source={SunImage} />
      <Title>Tenha a previsão do tempo na palma da sua mão.</Title>
    </View>
    <Footer>
      <Button icon="log-in" onPress={handleNavigate}>
        EXPLORAR
      </Button>
    </Footer>
  </Wrapper>
);

export default Start;
