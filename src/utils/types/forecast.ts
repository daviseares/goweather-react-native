export type ForecastDetails = {
  main: {
    feels_like: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
};

export type ForecastItem = {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    },
  ];
};
