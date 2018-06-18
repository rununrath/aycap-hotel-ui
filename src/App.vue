<template>
  <div id="app">
    <v-app>
      <v-layout column>
        <v-flex xs12 sm6>
          <v-toolbar color="indigo" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Hotels</v-toolbar-title>
            <v-spacer></v-spacer>            
            <div class="white--text">
              (JVM: {{ jvmVersion }}, REST API Version: {{ apiVersion }})
            </div>
            <v-spacer></v-spacer>

            <v-text-field flat solo-inverted clearable autofocus prepend-icon="search" label="Search">
            </v-text-field>
          </v-toolbar>
          <Hotel/>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Hotel from './components/Hotel.vue'

  export default {
    name: 'app',
    components: {
      Hotel
    },

    data () {
      return {

      }
    },

    computed: {
      ...mapState({
        apiVersion: state => state.apiVersion,
        jvmVersion: state => state.jvmVersion,
      })
    },

    mounted () {
      this.$store.dispatch('getVersion')
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
