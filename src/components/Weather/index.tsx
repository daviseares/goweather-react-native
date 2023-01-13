import { FC } from 'react';
import { View } from 'react-native';
import { Weather } from '~/mappers';
import { formatDate, formatTemperature } from '~/utils';
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

const WeatherComponent: FC<Props> = ({ info }) => {
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
