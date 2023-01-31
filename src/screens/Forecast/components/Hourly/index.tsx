import { FlashList } from '~/modules';
import { formatTemperature, formatTime } from '~/utils';
import { Hourly } from '~/utils/types/weather';
import { Card, Description, Hour, Icon, Temperature, Wrapper } from './styles';

type Props = {
  forecastList: Hourly[];
};

const HourlyComponent = ({ forecastList }: Props) => {
  return (
    <Wrapper>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={forecastList}
        keyExtractor={(_, index) => index.toString()}
        estimatedItemSize={115}
        contentContainerStyle={{ paddingLeft: 25 }}
        renderItem={({ item }) => (
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
