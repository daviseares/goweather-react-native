import { Hourly, Weather, WeatherApiParams } from '~/mappers';

export interface IWeatherApi {
  getCurrentWeather: (params: WeatherApiParams) => Promise<Weather>;
  getHourly: (params: WeatherApiParams) => Promise<Hourly[]>;
}
