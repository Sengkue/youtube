export const state = () => ({
  youtubeAPI:[],
  channel:{}
})

export const mutations = {
  setYoutube(state, data) {
    state.youtubeAPI = data
  },

  setChannel(state, data) {
    state.channel = data
  },

}

export const actions = {
  async selectYoutube({ commit }) {
    const maxResults = 52;
    const API_KEY = 'AIzaSyDxgfEgJCZD2k37pmmwtByeHzB14GqZSnc';
    const CHANNEL_ID = 'UCY4vNqCmk52RR4txKCDn2yA';
    const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&maxResults=${maxResults}&part=snippet&type=video`;
    await this.$axios.get(endpoint).then((res) => {
      commit('setYoutube', res.data)
    })
  },

  async selectChannel({ commit }) {
    const CHANNEL_ID = 'UCY4vNqCmk52RR4txKCDn2yA';
    const API_KEY = 'AIzaSyDxgfEgJCZD2k37pmmwtByeHzB14GqZSnc';
    const endpoint = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&key=${API_KEY}`;
    await this.$axios.get(endpoint).then((res) => {
      commit('setChannel', res.data)
    })
  },
}
