import { useEffect } from 'react';
import { View } from 'react-native';
import { LogoImage, SunImage } from '~/assets';
import { Button } from '~/components';
import useStart from './hooks/useStart';
import { Footer, Header, Logo, Sun, Title, Wrapper } from './styles';

const Start = () => {
  const { handleNavigate, loadPermissions } = useStart();

  useEffect(() => {
    loadPermissions();
  }, []);

  return (
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
};

export default Start;
