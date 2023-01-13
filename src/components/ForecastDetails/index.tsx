import { FC } from 'react';
import { View } from 'react-native';
import { ForecastDetails } from '~/mappers';
import { formatHumidity, formatTemperature, formatTime } from '~/utils';
import { Card, Down, Title, Top, Value, Wrapper } from './styles';

type Props = {
  details: ForecastDetails;
};

const ForecastDetailsComponent: FC<Props> = ({ details }) => {
  const { feels_like, humidity } = details.main;
  const { sunrise, sunset } = details.sys;

  return (
    <Wrapper>
      <Card>
        <View>
          <Top>
            <Title>NASCER DO SOL</Title>
            <Value>{formatTime(sunrise)}</Value>
          </Top>
          <Down>
            <Title>SENSAÇÃO TÉRMICA</Title>
            <Value>{formatTemperature(feels_like)}</Value>
          </Down>
        </View>
        <View>
          <Top>
            <Title>PÔR DO SOL</Title>
            <Value>{formatTime(sunset)}</Value>
          </Top>
          <Down>
            <Title>UMIDADE</Title>
            <Value>{formatHumidity(humidity)}</Value>
          </Down>
        </View>
      </Card>
    </Wrapper>
  );
};

export default ForecastDetailsComponent;
