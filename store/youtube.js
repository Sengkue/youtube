export const state = () => ({
  youtubeAPI:[],
})

export const mutations = {
  setYoutube(state, data) {
    state.youtubeAPI = data
  },
}

export const actions = {
  async selectYoutube({ commit }) {
    await this.$axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=52&key=AIzaSyDxgfEgJCZD2k37pmmwtByeHzB14GqZSnc').then((res) => {
      commit('setYoutube', res.data)
    })
  },
}
