import { useEffect } from 'react';
import { Button, Loading } from '~/components';

import ForecastDetails from './components/ForecastDetails';
import HourlyComponent from './components/Hourly';
import WeatherComponent from './components/Weather';
import useForecast from './hooks/useForecast';
import { ChildrenWrapper, Wrapper } from './styles';

const Forecast = () => {
  const {
    getWeather,
    hasWeather,
    weather,
    isLoading,
    loadingMessage,
    handleUpdate,
    hourly,
  } = useForecast();

  useEffect(() => {
    getWeather();
  }, []);

  if (hasWeather && !isLoading) {
    return (
      <Wrapper>
        <ChildrenWrapper>
          <WeatherComponent info={weather} />
          <Button onPress={handleUpdate}>Atualizar</Button>
          <HourlyComponent forecastList={hourly} />
          <ForecastDetails details={weather} />
        </ChildrenWrapper>
      </Wrapper>
    );
  }

  return <Loading>{loadingMessage}</Loading>;
};

export default Forecast;
