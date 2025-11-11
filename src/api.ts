import { WeatherResponseSchema } from "./schemas/weatherSchema";

interface location {
  lat: number;
  lon: number;
}

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather({ lat, lon }: location) {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${API_KEY}`
  );
  const data = await res.json();

  return WeatherResponseSchema.parse(data);
}
