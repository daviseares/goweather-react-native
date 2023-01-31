import { useMemo, useState } from 'react';
import { isEmpty } from '~/modules';
import { useStores } from '~/stores';

export default function useForecast() {
  const { weatherStore, locationStore } = useStores();
  const { weather, hourly } = weatherStore;
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Carregando...');

  const hasWeather = useMemo(
    () => !isEmpty(weather) && !isEmpty(hourly),
    [weather, hourly],
  );

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
    await locationStore.getLocation();
    await getWeather();
    setLoadingMessage('Atualizando...');
  };

  return {
    weather,
    hourly,
    isLoading,
    loadingMessage,
    hasWeather,
    handleUpdate,
    getWeather,
  };
}
