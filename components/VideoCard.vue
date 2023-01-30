<template>
  <v-container>
    <v-row>
      <v-col v-for="item in getYoutube.items" :key="item.id" cols="3">
        <v-card  v-ripple :to="`www.youtube.com/watch?v=${item.id}`" target="_blank" class="ma-2" max-height="400px">
          <v-img
            :src="item.snippet.thumbnails.high.url"
            :width="item.snippet.thumbnails.medium.width"
            :height="item.snippet.thumbnails.medium.height"
          ></v-img>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <v-avatar>
                  <img
                    :src="item.snippet.thumbnails.high.url"
                    alt="John"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="7">
                <h5>{{ item.snippet.title?.slice(0, 30) + '...' }}</h5></v-col
              >
            </v-row>

            <p>{{ item.id}} </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    getYoutube() {
      return this.$store.state.youtube.youtubeAPI
    },
  },
}
</script>

<!-- <script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getYoutube() {
      return this.$store.state.youtube.youtubeAPI
    },
  },

  mounted() {
    this.$store.dispatch('youtube/selectYoutube')
  },

}
</script> -->
