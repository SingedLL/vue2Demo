import { get } from '@/utils/requestUtil'

function getUser (params) {
  return get('/api/user/info', params)
}

export default {
  getUser
}
