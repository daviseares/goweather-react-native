import { IWeatherMapper, WeatherApiParams } from './weather.mapper.interface';

export default class WeatherMapper implements IWeatherMapper {
  mapWeatherApiParams = ({
    longitude,
    latitude,
  }: LocationType): WeatherApiParams => {
    return {
      lat: latitude,
      lon: longitude,
      lang: 'pt_br',
      units: 'metric',
    };
  };
}
