<template>
  <div class="page-menu__location">
    {{ location.city }}, {{ location.country }} <em>{{ temp }}°C</em>
  </div>
</template>
<script>
export default {
  name: "user-location",
  data() {
    return {
      location: [],
      weather: [],
      temp: "",
    };
  },
  mounted() {
    this.fetchLocation();
  },
  watch: {
    location(newValue) {
      this.fetchWeather(newValue.city);
    },
  },
  methods: {
    async fetchLocation() {
      try {
        const LOCATION_KEY = process.env.VUE_APP_LOCATION_API_KEY;
        const response = await this.axios.get(
          `https://ipinfo.io?token=${LOCATION_KEY}`
        );
        this.location = response.data;
      } catch (e) {
        console.log("Ошибка запроса местоположения");
      }
    },

    async fetchWeather(city) {
      try {
        const WEATHER_KEY = process.env.VUE_APP_WEATHER_API2_KEY;
        const response = await this.axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${city}&aqi=no`
        );
        this.weather = response.data;
      } catch (e) {
        console.log("Ошибка запроса погоды");
      }
      this.temp = this.weather.current.temp_c;
    },
  },
};
</script>

<style scoped lang="scss">
.page-menu {
  &__location {
    border-bottom: $blocks-border;
    @extend %app-font;
    font-size: 1.4rem;
    line-height: 17px;
    color: $text-color;
    padding: 15px 31px;
  }
  em {
    margin-left: 15px;
  }
}
</style>
