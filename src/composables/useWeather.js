import {useWeatherStore} from '../stores/weatherStore';
import {getTemperatura} from '../helpers/getWeather.js';

export const userWeather = async () => {
  const temperatura = getTemperatura();
  const weatherStore = useWeatherStore();
  weatherStore.Temperatura = temperatura;
}
