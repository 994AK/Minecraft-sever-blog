module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        //  全球统计有超过1%的使用率使用“>1%”;
        '> 1%',
        // 所有主流浏览器最近2个版本
        'last 2 versions'
      ]
      // grid: true, // 开启grid布局的兼容(浏览器IE除外其他都能兼容grid，可以关闭开启)
    },
    'postcss-px-to-viewport-8-plugin': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 1920, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*'], // 能转化为vw的属性列表,!font-size表示font-size后面的单位不会被转换
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      // 下面配置表示类名中含有'keep-px'都不会被转换
      selectorBlackList: ['keep-px'],
      minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // 媒体查询里的单位是否需要转换单位
      replace: true, // 是否直接更换属性值，而不添加备用属性
      exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1338 // 横屏时使用的视口宽度
    }
  }
}
