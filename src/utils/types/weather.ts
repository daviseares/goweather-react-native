export type Weather = {
  dt: number;
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
    },
  ];
};

type Lang = 'pt_br';
type Units = 'metric';

export type WeatherApiParams = {
  lat: number;
  lon: number;
  lang: Lang;
  units: Units;
};

export type Hourly = {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    },
  ];
};
