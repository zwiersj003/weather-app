<template>
  <b-container class="mt-4">
    <h3>Switch measurement unit</h3>
    <b-row class="text-left">
      <b-col>
        <b-button class="mr-1" @click="switchUnit" value="metric">&#8451;</b-button>
        <b-button class="mr-1" @click="switchUnit" value="imperial">&#8457;</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MeasurementUnitSwitcher',

  methods: {
    ...mapActions('userData', {
      switchMeasurementUnit: 'switchMeasurementUnit'
    }),

    switchUnit (e) {
      this.switchMeasurementUnit(e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
