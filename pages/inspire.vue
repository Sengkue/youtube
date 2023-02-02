<!-- <template>
  <div>
    <h1>My Videos</h1>
    <ul v-if="videos.length">
      <li v-for="video in videos" :key="video.id.videoId">
        {{ video.snippet.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    videos () {
      return this.$store.getters.videos
    }
  },
  created () {
    this.$store.dispatch('getters/getVideos')
  }
}
</script> -->
