import { getMenuTree } from '@/api/permission'

const permission = {

  actions: {
    // 登录
    getMenuTree ({commit}, parentId) {
      return new Promise((resolve, reject) => {
        getMenuTree(parentId).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default permission
