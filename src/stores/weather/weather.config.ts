import { Hourly, Weather } from '~/utils/types/weather';

export interface IWeatherStore {
  hourly: Hourly[];
  weather: Weather;
  getWeather(location: LocationType): Promise<void>;
  getHourly(location: LocationType): Promise<void>;
  clearWeather(): void;
}

export const initialState = {
  weather: {} as Weather,
  hourly: [] as Hourly[],
};
