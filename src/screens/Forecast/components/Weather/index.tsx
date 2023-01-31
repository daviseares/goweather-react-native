import { View } from 'react-native';
import { formatDate, formatTemperature } from '~/utils';
import { Weather } from '~/utils/types/weather';
import {
  Address,
  Card,
  CardLeft,
  DateInfo,
  Header,
  Temperature,
  Title,
  WeatherTitle,
  Wrapper,
} from './styles';

type Props = {
  info: Weather;
};

const WeatherComponent = ({ info }: Props) => {
  const { dt, name, main, weather } = info;

  return (
    <Wrapper>
      <Header>
        <Title>Previsão do Tempo</Title>
        <DateInfo>{formatDate(dt)}</DateInfo>
      </Header>
      <Card>
        <CardLeft>
          <WeatherTitle>{weather[0].description}</WeatherTitle>
          <Temperature>{formatTemperature(main.temp)}</Temperature>
        </CardLeft>
        <View>
          <Address>{name}</Address>
        </View>
      </Card>
    </Wrapper>
  );
};

export default WeatherComponent;
