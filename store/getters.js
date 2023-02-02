
// export const state = () => ({
//   videos: []
// });

// export const actions = {
//   async getVideos({ commit }) {
//     const API_KEY = 'AIzaSyDxgfEgJCZD2k37pmmwtByeHzB14GqZSnc';
//     const CHANNEL_ID = 'UCY4vNqCmk52RR4txKCDn2yA';
//     const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video`;

//     try {
//       const { data } = await this.$axios.get(endpoint);
//       commit('setVideos', data.items);
//     } catch (error) {
//     //  console.error(error);
//     }
//   }
// };

// export const mutations = {
//   setVideos(state, videos) {
//     state.videos = videos;
//   }
// };

// // export const getters = {
// //   videos: state => state.videos
// // };
