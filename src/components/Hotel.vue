<template>
  <div>
    <v-card>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="hotel in hotels" :key="hotel.name"> 
            <v-card width="250px">
              <v-card-media :src="'images/' + hotel.image" height="250px">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text">{{ hotel.name }}</span>
                    </v-flex>
                  </v-layout>
                </v-container>              
              </v-card-media>
              <v-card-title primary-title>
                  <div class="subheading ">
                    {{ hotel.city }}
                    <v-icon color="yellow darken-2" v-for="i in hotel.rating">star</v-icon>
                  </div>
              </v-card-title>
              <v-card-text>
                <div class="text-md-left" v-text="hotel.description"></div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        hotels: state => state.hotels,
      })
    },

    mounted(){
      this.$store.dispatch('retrieveHotels')
    }
  }
</script>

<style scoped>

</style>