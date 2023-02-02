<template>
  <div>
    <v-container>
      <!-- videos -->
      <div>
        <Video-Card />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'YoutubeIndex',
  layout: 'blank',

  data() {
    return {}
  },

  computed: {
    getYoutube() {
      return this.$store.state.youtube.youtubeAPI
    },
  },

  mounted() {
    this.$store.dispatch('youtube/selectYoutube')
    this.$store.dispatch('youtube/selectChannel')
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

.toggle-btn {
  width: 20px;
  height: 10px;
  position: relative;
  cursor: pointer;
}

.toggle-btn span {
  position: absolute;
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
  background: #979797;
}

.toggle-btn span:nth-child(1) {
  top: 0;
}

.toggle-btn span:nth-child(3) {
  top: 100%;
}
.search-bar {
  width: 85%;
  height: 100%;
  border: 2px solid #dbdbdb;
  padding: 0 20px;
  font-size: 16px;
  text-transform: capitalize;
}

.search-btn {
  width: 15%;
  height: 100%;
  background: #f0f0f0;
  border: 2px solid #dbdbdb;
  padding: 5px 0;
  border-left: none;
}

/* video */

// .video-container {
//   // width: calc(100% - 250px);
//   margin-top: 120px;
//   //margin-left: 250px;
//   padding: 20px;
//   //display: grid;
//  // grid-template-columns: repeat(4, 25%);
//  //  grid-gap: 20px 5px;
//   //  overflow-x: hidden;
// }

.video {
  min-height: 250px;
  height: auto;
}

.thumbnail {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.content {
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.channel-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.title {
  width: 100%;
  height: 40px;
  overflow: hidden;
}

.channel-name {
  font-size: 14px;
  margin: 2px 0;
  color: #979797;
}
</style>
