import WeatherMapper from './weather/weather.mapper';

export * from './weather/weather.mapper.interface';
const weatherMapper = new WeatherMapper();

export { weatherMapper };
