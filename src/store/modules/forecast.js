import axios from 'axios'

export default {
  namespaced: true,

  actions: {
    async getForecastForCity ({ state, rootGetters }, cityName) {
      const measurementUnit = rootGetters['userData/getMeasurementUnit']
      try {
        const forecast = await axios.get(
          `${process.env.VUE_APP_WEATHER_API_BASE_URL}/data/2.5/forecast` +
          `?q=${cityName}&appid=${process.env.VUE_APP_WEATHER_API_KEY}&units=${measurementUnit}`
        )
        return forecast.data
      } catch (e) {
        console.log(`Could not find forecast for ${cityName}`)
        return null
      }
    },

    getForecastForMultipleCities ({ state }, cityNames) {
      // bulk forecast - premium only
    }
  }
}
