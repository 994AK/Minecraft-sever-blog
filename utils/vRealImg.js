export const vRealImgFn = () => {
  const imageIsExist = function (url) {
    return new Promise((resolve) => {
      let img = new Image()
      img.onload = function () {
        if (this.complete === true) {
          resolve(true)
          img = null
        }
      }
      img.onerror = function () {
        resolve(false)
        img = null
      }
      img.src = url
    })
  }

  return {
    mounted: async (el, binding) => {
      const imgURL = binding.value// 获取图片地址
      if (imgURL) {
        const exist = await imageIsExist(imgURL)
        if (exist) {
          el.setAttribute('src', imgURL)
        }
      }
    }
  }
}
