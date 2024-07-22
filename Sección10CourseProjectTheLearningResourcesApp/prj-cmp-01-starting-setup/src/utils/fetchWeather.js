import { reactive,ref } from 'vue';

export function useWeather() {
  const weatherData = reactive({
    data: {
      icon: '',
      temperature: null,
      cloudCover: null,
      precipitation: {},
      wind: {},
    },
  });
  const precipitation = reactive({ data: {} });
  const wind = reactive({ data: {} });
  const currentDate = ref('');

  const fetchingWeather = async (prop) => {
    const apiKey = 'm5k6939i9lv8tblbjg6uq4hvfunthrwfhmis1cc1';

    const response = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${prop}&sections=all&timezone=UTC&language=en&units=metric&key=${apiKey}`
    );
    const responseData = await response.json();
    weatherData.data.icon = responseData.current.icon_num;
    weatherData.data.temperature = responseData.current.temperature;
    weatherData.data.cloudCover = responseData.current.cloud_cover;
    precipitation.data = responseData.current.precipitation;
    wind.data = responseData.current.wind;
    currentDate.value = Number(responseData.daily.data[0].day.split('-')[2]);

    console.log(responseData)
  };

  const fetchingWeatherTomorrow = async (prop,day) => {
    const apiKey = 'm5k6939i9lv8tblbjg6uq4hvfunthrwfhmis1cc1';

    const response = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${prop}&sections=all&timezone=UTC&language=en&units=metric&key=${apiKey}`
    );
    const responseData = await response.json();
    weatherData.data.icon = responseData.daily.data[day].all_day.icon;
    weatherData.data.temperature =
      responseData.daily.data[day].all_day.temperature;
    weatherData.data.cloudCover =
      responseData.daily.data[day].all_day.cloud_cover.total;
      precipitation.data = responseData.daily.data[day].all_day.precipitation;
    wind.data = responseData.daily.data[day].all_day.wind;
  };

  return {
    weatherData,
    precipitation,
    wind,
    fetchingWeather,
    fetchingWeatherTomorrow,
    currentDate
  };
}
