<template>
  <div>
      <v-progress-circular v-if="persos.length === 0" fill="transparent" indeterminate :size="50"></v-progress-circular>
          <v-list   three-line>
              <template v-for="perso in persos">
                <v-list-tile  :key="perso.id">
                  <v-list-tile-action>
                    <v-icon v-if="perso.sexe" class="pink--text">star</v-icon>
                    <v-icon v-else class="red--text">star_border</v-icon>
                  </v-list-tile-action>
                  
                  <v-list-tile-content>
                    <v-list-tile-title v-html="perso.pseudo"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="perso.activite"></v-list-tile-sub-title>
                    <v-list-tile-sub-title>
                      <small>{{ perso.like }} likes</small>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  
                  <v-list-tile-content>
                    <v-chip :class="{ primary: perso.note >= 3, 'red': perso.note < 3 }" class="white--text">{{ perso.note }} / 5</v-chip>
                  </v-list-tile-content>
                  
                  <v-list-tile-action>
                  <v-btn icon ripple @click.native="detail(perso['.key'])"><v-icon class="grey--text text--lighten-1">keyboard_arrow_right</v-icon></v-btn>
                </v-list-tile-action>
                </v-list-tile>
                <v-divider v-bind:inset="perso.inset"></v-divider>
              </template>
            </v-list>
        

        <v-btn round primary dark v-if="persos.length > 0"  @click.native="more" align-center justify-center>Voir plus</v-btn>
        
        </div>
</template>

<script>
import firebase from '@/configuration.js';
import {Store} from '@/Store.js'

export default {
  name: 'main',
  data () {
    return {
      data: Store.data,
      persos: [],
    }
  },
  firebase() {
    return {
      persos: firebase.database.ref('data').limitToLast(5)
    }
  },
  methods: {
    more(id){
      this.limit += 5;
      this.persos = firebase.database.ref('data')
    },
    detail(id){
      this.$router.push(`/detail/${id}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
