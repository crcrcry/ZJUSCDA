import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import association from './modules/association';
import department from './modules/department';
import activity from './modules/activity';
import member from './modules/member';
import join from './modules/join';

Vue.use(Vuex);

const state = {
  ifShowBlackboard: false,
  blackboardName: '',
  copyright: 'Copyright@2017 ZJUSCDA. All rights reserved. ',
  contact: '浙ICP备17028775号-2 联系我们',
  usInfo: {
    title: '浙大职协SCDA',
    message: '联系电话：178-1686-1213（会长） 联系电话：188-6818-6398（会助）   联系电话：131-0772-0201（网站负责人） 微信公众号：scda_zju ',
    duration: 5000, // 提示的持续事件，单位ms
  },
};

const getters = {

};

const mutations = {
  switchBlackboard(state, payload) {
    state.ifShowBlackboard = payload.value;
    state.blackboardName = payload.name;
  },
};

const actions = {
  switchBlackboard(context, payload) {
    context.commit('switchBlackboard', { ...payload });
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    home,
    association,
    department,
    activity,
    member,
    join,
  },
});
