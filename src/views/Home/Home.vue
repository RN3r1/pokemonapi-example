<template lang="html">
  <div>
    <h1 class="home-view">Componente Listo</h1>
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Image</th>
      </thead>
      <tbody>
          <pokehtml v-for="specie in pokemon" :specie="specie"></pokehtml>
      </tbody>
    </table>
  </div>
</template>

<script>

import {getPokemon} from '@/services/pokemon'
import Row from '@/components/Row'

export default {

  name:'HomeView',
  components:{

    pokehtml:Row

  },
  data (){
    return {
      pokemon:[]
    }
  },
  created (){
      getPokemon()
      .then((response) => {

        this.pokemon = response.data
        console.log(response.data)

      })
      .catch(err => {

          console.error(err);

      })
  }
}
</script>

<style lang="css">
</style>
