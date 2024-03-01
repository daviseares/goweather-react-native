import { Hourly, Weather, WeatherApiParams } from '~/utils/types/weather';

export interface IWeatherApi {
  getCurrentWeather: (params: WeatherApiParams) => Promise<Weather>;
  getHourly: (params: WeatherApiParams) => Promise<Hourly[]>;
}
