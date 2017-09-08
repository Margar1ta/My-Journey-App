<template>
  <div>
    <h1> Add a new FABILIOS Place! </h1>

    <input
      type="text"
      name="placeName"
      v-model="placeName"
      placeholder="Название места" />
      <br>
      <input
        type="text"
        name="address"
        v-model="placeAddress"
        placeholder="Адрес места" />
        <br>
        <button @click = 'addPlace'>Добавить</button>
  </div>

</template>

<script>
import AddPlaceService from '@/services/AddPlaceService'
export default {
  data () {
    return {
      placeName: '',
      placeAddress: ''
    }
  },
  methods: {
    async addPlace () {
      const response = await AddPlaceService.register({
        placeName: this.placeName,
        placeAddress: this.placeAddress
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
