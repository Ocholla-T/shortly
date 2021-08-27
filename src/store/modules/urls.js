import axios from 'axios';

const state = {
  urlModel: '',
  urls: [],
  hasLink: false,
  isLoading: false,
};

const getters = {
  allUrls: (state) => state.urls,
  hasLink: (state) => state.hasLink,
  isLoading: (state) => state.isLoading,
};

const actions = {
  async shortenUrl({ commit, state }) {
    if (state.hasLink === false) {
      state.hasLink = true;
    }

    state.isLoading = true;
    const response = await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${state.urlModel}`)
      .catch((error) => {
        console.error(error);
      });

    state.isLoading = false;

    commit('setUrls', response.data);
  },
};

const mutations = {
  updateUrl(state, url) {
    state.urlModel = url;
  },
  setUrls(state, urls) {
    state.urls.unshift({
      originalLink: urls.result.original_link,
      shortenedLink: urls.result.short_link,
    });
  },
};

export default { state, getters, actions, mutations };
