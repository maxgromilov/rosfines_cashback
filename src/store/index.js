import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: {
      email: 'hey@rosfines.ru',
    },
    company: false,
    user: {
      name: '',
      phone: '',
      cashReceipt: '',
    },
  },
  mutations: {
    SET_COMPANY(state, company) {
      state.company = company
    }
  },
  actions: {
    async receiptSubmit({
      state
    }, user) {
      const {
        id,
        name,
        cashback,
        maxCashback
      } = state.company;
      const data = {
        id,
        name,
        cashback,
        maxCashback,
        user
      };
      return new Promise(async (resolve, reject) => {
        try {
          // const res = await axios.post('/receipt', data);
          // if (res.status == 200) {
          //   resolve(true);
          // }
          resolve(true)
        } catch (e) {
          //reject(false)
          resolve(true);
        }
      });
    },
    async getCompany({
      commit
    }, id) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get(`/company-${id}.json`);
          if (res.status == 200) {

            commit("SET_COMPANY", res.data)
            resolve(true);
          }
        } catch (e) {
          resolve(e);
        }
      });
    },
  },
  getters: {
    company: (state) => state.company,
    contacts: (state) => state.contacts,
  },
  modules: {},
});