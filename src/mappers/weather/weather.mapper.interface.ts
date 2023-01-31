import { WeatherApiParams } from '~/utils/types/weather';

export interface IWeatherMapper {
  mapWeatherApiParams: (data: LocationType) => WeatherApiParams;
}
