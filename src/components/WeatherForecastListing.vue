<template>
  <b-container>
    <h2>Forecast Listing</h2>
    <b-row>
      <b-col v-for="city in cities" :key="city" lg="6" >
        <WeatherForecastItem :city="city" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import WeatherForecastItem from '@/components/WeatherForecastItem'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'WeatherForecastListing',
  components: { WeatherForecastItem },

  computed: {
    ...mapGetters('userData', {
      cities: 'getCities'
    })
  },

  mounted () {
    this.checkCitiesArray()
  },

  methods: {
    ...mapMutations('userData', {
      addCity: 'addCity',
      setCities: 'setCities'
    }),

    checkCitiesArray () {
      if (this.cities.length === 0) {
        this.addCity(process.env.VUE_APP_DEFAULT_CITY)
      }
    }
  },

  watch: {
    cities () {
      this.checkCitiesArray()
    }
  }
}
</script>

<style scoped>

</style>
