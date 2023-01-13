import { Hourly, Weather, WeatherApiParams } from '~/mappers';
import { ResponseError } from '~/utils';
import request from '../request';
import { IWeatherApi } from './weather.api.interface';

export default class WeatherApi implements IWeatherApi {
  getCurrentWeather = async ({
    lat,
    lon,
    lang,
    units,
  }: WeatherApiParams): Promise<Weather> => {
    try {
      const { data } = await request.get('/weather', {
        params: { lat, lon, lang, units },
      });

      return data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  getHourly = async ({
    lat,
    lon,
    lang,
    units,
  }: WeatherApiParams): Promise<Hourly[]> => {
    try {
      const { data } = await request.get('/onecall', {
        params: { lat, lon, lang, units },
      });

      return data.hourly;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}
