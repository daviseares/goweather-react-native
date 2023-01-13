import { weatherApi } from '~/api';
import { weatherMapper } from '~/mappers';
import { combine, create, createJSONStorage, persist } from '~/modules';
import { zustandStorage } from '~/services';
import { IWeatherStore, initialState } from './weather.config';

export const weatherStore = combine({ ...initialState }, (set) => ({
  getWeather: async (location: LocationType): Promise<void> => {
    const params = weatherMapper.mapWeatherApiParams(location);
    const current = await weatherApi.getCurrentWeather(params);
    set((prevState) => ({ ...prevState, weather: current }));
  },

  getHourly: async (location: LocationType): Promise<void> => {
    const params = weatherMapper.mapWeatherApiParams(location);
    const hourly = await weatherApi.getHourly(params);
    set((prevState) => ({ ...prevState, hourly }));
  },

  clearWeather: (): void => {
    set(initialState);
  },
}));

export const useWeatherStore = create<IWeatherStore>()(
  persist(weatherStore, {
    name: 'weather',
    storage: createJSONStorage(() => zustandStorage),
  }),
);
