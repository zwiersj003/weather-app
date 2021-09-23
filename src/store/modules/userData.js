export default {
  namespaced: true,

  state () {
    return {
      cities: [],
      measurementUnit: 'metric'
    }
  },

  getters: {
    getCities (state) {
      return state.cities
    },

    getMeasurementUnit (state) {
      return state.measurementUnit
    }
  },

  mutations: {
    setCities (state, cities) {
      state.cities = cities
    },

    addCity (state, city) {
      state.cities.push(city)
    },

    removeCity (state, city) {
      const index = state.cities.indexOf(city)
      if (index > -1) {
        state.cities.splice(index, 1)
      }
    },

    setMeasurementUnit (state, unit) {
      state.measurementUnit = unit
    }
  },

  actions: {
    async addCity ({ commit, getters, dispatch }, cityName) {
      cityName = cityName.toLowerCase()
      if (getters.getCities.includes(cityName) ||
        !await dispatch('forecast/getForecastForCity', cityName, { root: true })
      ) {
        return 'Could not add city'
      }

      commit('addCity', cityName)
    },

    switchMeasurementUnit ({ commit, dispatch }, unit) {
      commit('setMeasurementUnit', unit)
      // Update all cities forecast
      // Measurement unit from state is used but bulk operation is not available in the free plan
    }
  }
}
