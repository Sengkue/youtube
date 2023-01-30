<template>
  <div>
    <nav class="navbar">
      <div class="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src="img/logo.PNG" class="logo" alt="" />
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="search" />
        <button class="search-btn"><img src="img/search.PNG" alt="" /></button>
      </div>
      <div class="user-options">
        <img src="img/video.PNG" class="icon" alt="" />
        <img src="img/grid.PNG" class="icon" alt="" />
        <img src="img/bell.PNG" class="icon" alt="" />
        <div class="user-dp">
          <img src="img/profile-pic.png" alt="" />
        </div>
      </div>
    </nav>

    <!-- sidebar -->
    <div class="side-bar">
      <a href="#" class="links active"><img src="img/home.PNG" alt="" />home</a>
      <a href="#" class="links"><img src="img/explore.PNG" alt="" />explore</a>
      <a href="#" class="links"
        ><img src="img/subscription.PNG" alt="" />subscription</a
      >
      <hr class="seperator" />
      <a href="#" class="links"><img src="img/library.PNG" alt="" />library</a>
      <a href="#" class="links"><img src="img/history.PNG" alt="" />history</a>
      <a href="#" class="links"
        ><img src="img/your-video.PNG" alt="" />your video</a
      >
      <a href="#" class="links"
        ><img src="img/watch-later.PNG" alt="" />watch leater</a
      >
      <a href="#" class="links"
        ><img src="img/liked video.PNG" alt="" />like video</a
      >
      <a href="#" class="links"
        ><img src="img/show more.PNG" alt="" />show more</a
      >
    </div>

    <!-- filters -->
    <div class="filters">
      <button class="filter-options active">all</button>
      <button class="filter-options">CSS</button>
      <button class="filter-options">web development</button>
      <button class="filter-options">python</button>
      <button class="filter-options">entertainment</button>
      <button class="filter-options">marvel</button>
      <button class="filter-options">javascript</button>
      <button class="filter-options">artificial intelligence</button>
      <button class="filter-options">machine learning</button>
      <button class="filter-options">trending</button>
    </div>

    <!-- videos -->
        <div class="video-container">
          <div class="video">
            <Video-Card/>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubeIndex',
  layout: 'blank',

  data() {
    return {

    }
  },

  computed: {
    getYoutube() {
      return this.$store.state.youtube.youtubeAPI
    },
  },

  mounted() {
    this.$store.dispatch('youtube/selectYoutube')
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

body {
  position: relative;
  background: #f0f0f0;
  font-family: 'roboto', sans-serif;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 2.5vw;
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

.logo {
  height: 30px;
  margin: -10px 30px 0;
}

.search-box {
  position: relative;
  max-width: 500px;
  width: 50%;
  height: 35px;
  display: flex;
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

.search-btn img {
  height: 100%;
}

.user-options {
  height: 35px;
  display: flex;
  margin-left: auto;
  align-items: center;
}

.user-options .icon {
  height: 80%;
  margin-right: 20px;
  cursor: pointer;
}

.user-dp {
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
}

.user-dp img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* side-bar */

.side-bar {
  position: fixed;
  top: 60px;
  left: 0;
  min-width: 250px;
  width: 250px;
  height: calc(100vh - 60px);
  background: #fff;
  padding-right: 10px;
}

.links {
  display: block;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #242424;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.links img {
  height: 25px;
  margin-right: 20px;
}

.links:hover,
.links.active {
  background: rgba(0, 0, 0, 0.1);
}

.seperator {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

/* filter */

.filters {
  position: fixed;
  left: 250px;
  top: 60px;
  width: calc(100% - 250px);
  height: 60px;
  background: #fff;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  padding: 0 20px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
}

.filters::-webkit-scrollbar {
  display: none;
}

.filter-options {
  flex: 0 0 auto;
  padding: 10px 20px;
  border-radius: 50px;
  background: #f0f0f0;
  border: 1px solid #dbdbdb;
  text-transform: capitalize;
  margin-right: 10px;
  color: #242424;
  font-size: 15px;
  cursor: pointer;
}

.filter-options.active {
  color: #fff;
  background: #242424;
}

/* video */

.video-container {
  // width: calc(100% - 250px);
  margin-top: 120px;
  margin-left: 250px;
  padding: 20px;
  //display: grid;
 // grid-template-columns: repeat(4, 25%);
 //  grid-gap: 20px 5px;
  //  overflow-x: hidden;
}

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
