import axios from 'axios';

const state = {
  urlModel: '',
  urls: [],
  hasLink: false,
};

const getters = {
  allUrls: (state) => state.urls,
  hasLink: (state) => state.hasLink,
};

const actions = {
  async shortenUrl({ commit, state }) {
    if (state.hasLink === false) {
      state.hasLink = true;
    }

    const response = await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${state.urlModel}`)
      .catch((error) => {
        console.error(error);
      });

    commit('setUrls', response.data);
  },
};

const mutations = {
  updateUrl(state, url) {
    state.urlModel = url;
  },
  setUrls(state, urls) {
    state.urls.push({
      originalLink: urls.result.original_link,
      shortenedLink: urls.result.short_link,
    });
  },
};

export default { state, getters, actions, mutations };
