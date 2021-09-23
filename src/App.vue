<template>
  <div id="app">
    <b-container>
      <h1>Weather Forecast</h1>
      <b-row>
        <b-col md="6" lg="4" xl="3">
          <AddCity />
          <MeasurementUnitSwitcher />
        </b-col>
        <b-col>
          <WeatherForecastListing />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import WeatherForecastListing from '@/components/WeatherForecastListing'
import AddCity from '@/components/AddCity'
import MeasurementUnitSwitcher from '@/components/MeasurementUnitSwitcher'

export default {
  name: 'App',
  components: {
    MeasurementUnitSwitcher,
    AddCity,
    WeatherForecastListing
  }
}
</script>
