<template>
  <b-row class="text-center border-top border-dark" align-v="center">
    <b-col cols="12" xl="6">{{ forecast.dt_txt }}</b-col>
    <b-col>
      <img
        v-if="forecast.weather[0]"
        :src="`${weatherIconsUrl}/${forecast.weather[0].icon}.png`"
        :alt="forecast.weather[0].description" >
    </b-col>
    <b-col>{{ forecast.main.temp }}&#8451;</b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ThreeHourForecastItem',

  props: {
    forecast: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      weatherIconsUrl: ''
    }
  },

  mounted () {
    this.weatherIconsUrl = process.env.VUE_APP_WEATHER_ICONS_URL
  }
}
</script>

<style scoped>
</style>
