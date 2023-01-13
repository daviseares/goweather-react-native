import React, { FC, useEffect, useState } from 'react';
import { Geolocation, isEmpty } from '~/modules';
import { useStores } from '~/stores';
import Forecast from './Forecast';

const ForecastContainer: FC = () => {
  const { weatherStore, locationStore } = useStores();
  const { weather, hourly } = weatherStore;
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Carregando...');

  const getWeather = async () => {
    try {
      await weatherStore.getWeather(locationStore.location);
      await weatherStore.getHourly(locationStore.location);
    } catch ({ message }) {
      console.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    await Geolocation.getCurrentPositionAsync({});
    await getWeather();
    setLoadingMessage('Atualizando...');
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <Forecast
      hasWeather={!isEmpty(weather) && !isEmpty(hourly)}
      hourlyWeather={hourly}
      currentWeather={weather}
      loadingMessage={loadingMessage}
      isLoading={isLoading}
      handleUpdate={handleUpdate}
    />
  );
};

export default ForecastContainer;
