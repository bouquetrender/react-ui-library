import { defineConfig } from 'dumi'

let base = '/react-ui-library'
let publicPath = '/react-ui-library/'

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined
  publicPath = undefined
}

export default defineConfig({
  title: 'Bouquet Design', // 站点名称
  mode: 'site',
  outputPath: 'doc-site', // 输出文件夹
  logo: '/images/bouquet.png',
  favicon: 'https://cdn.jsdelivr.net/gh/vedimension/jsDelivrCDN/twcover.png',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  base,
  publicPath
})
