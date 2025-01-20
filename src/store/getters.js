
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  userId: state => state.user.userInfo.userId,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
// getters方便属性快捷访问
export default getters
