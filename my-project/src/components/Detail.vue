<template>
<div>
      <v-card v-if="perso">
        <v-card-media
          class="white--text"
          height="200px"
          :src="perso.photo"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ perso.pseudo }} - <small>{{ perso.like }}</small></span>
                <v-chip :class="{ primary: perso.note >= 3, 'red': perso.note < 3 }" class="white--text">{{ perso.note }} / 5</v-chip>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">{{ perso.naissance }}</span><br>
            <span><b>{{ perso.activite }}</b> </span><br>
            <span>{{ perso.resume }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn large outline primary @click.native="like"  class="white--text"><v-icon>thumb_up</v-icon> Like</v-btn>
          <v-btn @click.native="plus" flat class="orange--text"><v-icon>mood</v-icon> +1</v-btn>
          <v-btn @click.native="moins" flat class="orange--text"><v-icon>mood_bad</v-icon> -1</v-btn>
        </v-card-actions>
      </v-card>
      <v-progress-circular v-else indeterminate class="purple--text"></v-progress-circular>

      <v-list two-line v-if="perso.comments">
          <template>
            <v-list-tile v-for="(comment,index) in perso.comments" :key="index">
              
              <v-list-tile-content>
                <p>{{ comment.content }}</p>
              </v-list-tile-content>

               <v-list-tile-avatar>
                  <v-icon class="grey--text text--lighten-1">delete_forever</v-icon>
              </v-list-tile-avatar>

            </v-list-tile>
          </template>
        </v-list>

        <v-alert v-else info value="true">
          Aucun commentaire pour le moment
        </v-alert>

          <form @submit.prevent="store">
            <v-text-field
                    :label="`Réagissez sur ${perso.pseudo}`"
                    v-model="newMess"
                    full-width
                    hint="Au moins 3 caractères"
                    min="3"
                    max="300"
                    counter
                    append-icon="chat"
              ></v-text-field>
          </form>


</div>
</template>

<script>
import firebase from '@/configuration.js';

export default {
  name: 'detail',

  data () {
    return {
      perso: null,
      newMess: ''
    }
  },
  methods: {
    store(){
      this.perso.comments.push({content: this.newMess, created : Date.now()});
      firebase.database.ref(`data/${this.$route.params.id}`).set(this.perso);
      this.newMess = '';
    },
    plus(){
      this.perso.note++;
      firebase.database.ref(`data/${this.$route.params.id}`).set(this.perso)
    },
    moins(){
      this.perso.note--;
      firebase.database.ref(`data/${this.$route.params.id}`).set(this.perso)
    },
    like(){
      this.perso.like++;
      firebase.database.ref(`data/${this.$route.params.id}`).set(this.perso)
    }
  },
  created(){
    firebase.database.ref(`data/${this.$route.params.id}`).once('value').then((snapshot) => this.perso = snapshot.val());
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
