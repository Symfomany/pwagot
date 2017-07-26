<template>
    
   <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="data.drawer = !data.drawer"></v-toolbar-side-icon>
      <v-toolbar-title>PWA App</v-toolbar-title>
  </v-toolbar>
  
</template>

<script>
import firebase from '@/configuration.js';
import {Store} from '@/Store.js'

export default {
  name: 'hello',
  data () {
    return {
        data: Store.data
    }
  },
  firebase() {
    return {
      persos: firebase.database.ref('data')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
