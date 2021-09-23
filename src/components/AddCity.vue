<template>
  <b-container>
    <h2>Cities</h2>
    <b-input-group>
      <b-form-input v-model="cityInput" placeholder="Enter city..."></b-form-input>
      <b-button @click="addCity">Submit</b-button>
      <span v-if="error" class="text-danger">{{ error }}</span>
    </b-input-group>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddCity',

  data () {
    return {
      cityInput: null,
      error: null
    }
  },

  methods: {
    ...mapActions('userData', {
      addCityToUserData: 'addCity'
    }),

    async addCity () {
      const result = await this.addCityToUserData(this.cityInput)
      if (!result) {
        this.cityInput = null
        this.error = null
        return
      }

      this.error = result
    }
  }
}
</script>

<style scoped>

</style>
