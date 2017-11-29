<template lang="html">
  <tr>
    <td>{{ specie.number }}</td>
    <td>{{ specie.name }}</td>
    <td><img :src="specie.ThumbnailImage" width="35"></td>
  </tr>
</template>

<script>
export default {

  name:'Row',
  props:['specie']

}
</script>

<style lang="css">
</style>
