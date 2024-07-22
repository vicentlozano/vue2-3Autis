import {  ref } from 'vue';

export function useWeather() {
  
  const temperature= ref(null);
  const minTemperature = ref([]);
  const maxTemperature = ref([]);
  const icon = ref([]);
  const daysOfWeek = ref([]);
  const dataFormat = ref('');
  const summary = ref('')

  const fetchingWeather = async (prop) => {
    const apiKey = 'm5k6939i9lv8tblbjg6uq4hvfunthrwfhmis1cc1';

    const response = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${prop}&sections=all&timezone=UTC&language=en&units=metric&key=${apiKey}`
    );
    const responseData = await response.json();
    console.log(responseData)
    temperature.value = responseData.current.temperature;
    const date = new Date(responseData.daily.data[0].day);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    dataFormat.value = date.toLocaleDateString('en-US', options);
    summary.value = responseData.current.summary;
    for (let i = 0; i < 7; i++) {
      minTemperature.value.push(
        responseData.daily.data[i].all_day.temperature_min
      );
      maxTemperature.value.push(
        responseData.daily.data[i].all_day.temperature_max
      );

      icon.value.push(responseData.daily.data[i].all_day.icon);
      const date = new Date(responseData.daily.data[i].day);
      const dayOptions = { weekday: 'short' };
      daysOfWeek.value.push(date.toLocaleDateString('en-US', dayOptions));
    }
    console.log(icon.value)
  };

  return {
    
    fetchingWeather,
    dataFormat,
    icon,
    daysOfWeek,
    minTemperature,
    maxTemperature,
    temperature,
    summary,
  };
}
