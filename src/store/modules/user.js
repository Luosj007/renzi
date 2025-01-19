import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken()
  // 为了从缓存中读取初始值
}

const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
    // 同步到缓存
  },
  removeToken() {
    // 为了删除Vuex中的Token
    state.token = null
    removeToken()
  }
}

const actions = {
  // context上下文,传入参数
  login(context, data) {
    console.log(data)
    // todo:调用登录接口
    // 返回一个token
    context.commit('setToken', '12345')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
