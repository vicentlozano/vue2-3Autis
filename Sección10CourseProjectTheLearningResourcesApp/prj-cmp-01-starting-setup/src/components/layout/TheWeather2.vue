<template>
  <section class="card">
    <div>
      <div class="grid-column">
        <div class="grid-row">
          <h2>{{ props.city }}</h2>
          <p>{{ dataFormat }}</p>
          <div class="grid-column summary">
            <img :src="getIconSrc(0)" />
            <h4>{{ summary }}</h4>
          </div>
        </div>
        <div class="grid-row">
          <span>{{ Math.round(temperature) }}°C</span>
          <h3>
            {{ Math.round(minTemperature[0]) }}° /
            {{ Math.round(maxTemperature[0]) }}°
          </h3>
        </div>
      </div>
    </div>
    <div>
      <div class="grid-column-3 with-border">
        <div class="grid-row">
          <p>{{ daysOfWeek[1] }}</p>
          <img :src="getIconSrc(1)" />
          <p>
            {{ Math.round(minTemperature[1]) }}°/{{
              Math.round(maxTemperature[1])
            }}°
          </p>
        </div>
        <div class="grid-row">
          <p>{{ daysOfWeek[2] }}</p>
          <img :src="getIconSrc(2)" />
          <p>
            {{ Math.round(minTemperature[2]) }}°/{{
              Math.round(maxTemperature[2])
            }}°
          </p>
        </div>
        <div class="grid-row">
          <p>{{ daysOfWeek[3] }}</p>
          <img :src="getIconSrc(3)" />
          <p>
            {{ Math.round(minTemperature[3]) }}°/{{
              Math.round(maxTemperature[3])
            }}°
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="grid-column-3 with-border">
        <div class="grid-row">
          <p>{{ daysOfWeek[4] }}</p>
          <img :src="getIconSrc(4)" />
          <p>
            {{ Math.round(minTemperature[4]) }}°/{{
              Math.round(maxTemperature[4])
            }}°
          </p>
        </div>
        <div class="grid-row">
          <p>{{ daysOfWeek[5] }}</p>
          <img :src="getIconSrc(5)" />
          <p>
            {{ Math.round(minTemperature[5]) }}°/{{
              Math.round(maxTemperature[5])
            }}°
          </p>
        </div>
        <div class="grid-row">
          <p>{{ daysOfWeek[6] }}</p>
          <img :src="getIconSrc(6)" />
          <p>
            {{ Math.round(minTemperature[6]) }}°/{{
              Math.round(maxTemperature[6])
            }}°
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { useWeather } from '../../utils/fetchWeather2';
const {
  temperature,
  fetchingWeather,
  dataFormat,
  icon,
  daysOfWeek,
  minTemperature,
  maxTemperature,
  summary,
} = useWeather();
const props = defineProps({
  city: String,
});

const getIconSrc = (index) => {
  const iconValue = icon.value[index];
  return iconValue
    ? require(`@/assets/weather/${iconValue}.png`)
    : require('@/assets/weather/7.png');
};
onMounted(async () => {
  await fetchingWeather(props.city);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap');

.card {
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  border-radius: 20px;
  box-shadow: 25px 25px 40px 0px rgba(0, 0, 0, 0.33);
  background: linear-gradient(90deg, #554c5e, #5f758f, #64a2b0);
  font-family: 'Helvetica Neue', sans-serif;
  color: white;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0.5rem;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 30px 30px 50px 0px rgba(0, 0, 0, 0.5);
}
.grid-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
}
.grid-column.summary {
  grid-template-columns: 0.5fr 1fr;
}
.grid-row {
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
}
.grid-column-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.grid-column-3.with-border {
  border-top: 0.5px solid white; /* Línea de separación */
  padding-top: 0.6rem;
}
span {
  font-size: 74px;
}
h1,
h2,
h3,
p,
h4 {
  text-align: center;
  margin: 0;
}
img {
  width: 50px;
  height: 50px;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.2rem;
}

p {
  font-size: 1rem;
}
</style>
