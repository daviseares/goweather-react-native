import { FC } from 'react';
import { Hourly } from '~/mappers';
import { formatTemperature, formatTime } from '~/utils';

// styles
import {
  Card,
  Description,
  Hour,
  Icon,
  List,
  Temperature,
  Wrapper,
} from './styles';

type Props = {
  forecastList: Hourly[];
};

const HourlyComponent: FC<Props> = ({ forecastList }) => {
  return (
    <Wrapper>
      <List
        data={forecastList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }: { item: any }) => (
          <Card>
            <Hour>{formatTime(item.dt)}</Hour>
            <Icon
              source={{
                uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                priority: 'high',
              }}
              resizeMode="contain"
            />
            <Description>{item.weather[0].description}</Description>
            <Temperature>{formatTemperature(item.temp)}</Temperature>
          </Card>
        )}
      />
    </Wrapper>
  );
};

export default HourlyComponent;
