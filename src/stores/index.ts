import { useLocationStore } from './location/location.store';
import { useWeatherStore } from './weather/weather.store';

export const useStores = () => {
  const weatherStore = useWeatherStore();
  const locationStore = useLocationStore();

  return {
    weatherStore,
    locationStore,
  };
};
