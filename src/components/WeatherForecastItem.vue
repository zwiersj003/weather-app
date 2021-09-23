<template>
  <b-container class="border border-dark m-2" v-if="forecast">
    <b-row class="m-1">
      <b-col>
        <h3>{{ forecast.city.name }}</h3>
      </b-col>
      <b-col class="text-right">
        <b-button @click="removeCity(city)">Remove</b-button>
      </b-col>
    </b-row>
    <b-container class="forecast">
      <div v-for="threeHourlyForecast in forecast.list" :key="threeHourlyForecast.dt">
        <ThreeHourForecastItem v-if="showThreeHourForecastItem(threeHourlyForecast.dt)" :forecast="threeHourlyForecast" />
      </div>
    </b-container>
  </b-container>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import ThreeHourForecastItem from '@/components/ThreeHourForecastItem'

export default {
  name: 'WeatherForecastItem',
  components: { ThreeHourForecastItem },
  data () {
    return {
      forecast: null,
      timePlus48Hours: 0
    }
  },

  props: {
    city: {
      type: String,
      required: true
    }
  },

  async mounted () {
    let currentTime = new Date()
    currentTime.setHours(currentTime.getHours() + 48)

    // Get current time /1000 for correct unix timestamp
    this.timePlus48Hours = currentTime.getTime() / 1000
    this.forecast = await this.getForecast(this.city)
  },

  methods: {
    ...mapActions('forecast', {
      getForecast: 'getForecastForCity'
    }),

    ...mapMutations('userData', {
      removeCity: 'removeCity'
    }),

    /**
     * Compare current time with given timestamp
     * Returns true if given timestamp is before the current timestamp
     *
     * @param time
     * @returns {boolean}
     */
    showThreeHourForecastItem (time) {
      return time <= this.timePlus48Hours
    }
  }
}
</script>
