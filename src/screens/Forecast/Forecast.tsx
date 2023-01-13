import React, { FC } from 'react';
import {
  Button,
  ForecastDetails,
  Hourly as HourlyComponent,
  Loading,
  Weather as WeatherComponent,
} from '~/components';
import { Hourly, Weather } from '~/mappers';
import { ChildrenWrapper, Wrapper } from './styles';

type Props = {
  hasWeather: boolean;
  hourlyWeather: Hourly[];
  currentWeather: Weather;
  isLoading: boolean;
  loadingMessage: string;
  handleUpdate(): void;
};

const Forecast: FC<Props> = ({
  hasWeather,
  hourlyWeather,
  currentWeather,
  isLoading,
  loadingMessage,
  handleUpdate,
}) => {
  if (hasWeather && !isLoading) {
    return (
      <Wrapper>
        <ChildrenWrapper>
          <WeatherComponent info={currentWeather} />
          <Button onPress={handleUpdate}>Atualizar</Button>
          <HourlyComponent forecastList={hourlyWeather} />
          <ForecastDetails details={currentWeather} />
        </ChildrenWrapper>
      </Wrapper>
    );
  }

  return <Loading>{loadingMessage}</Loading>;
};

export default Forecast;
