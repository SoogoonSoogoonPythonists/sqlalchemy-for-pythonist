const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '파이썬 개발자를 위한 SQLAlchemy',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: "/sqlalchemy-for-pythonist/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/SoogoonSoogoonPythonists/sqlalchemy-for-pythonist'
      },
    ],
    sidebar: {
      '/tutorial/': [
        {
          title: 'Tutorial',
          path: '/tutorial/',
          collapsable: false,
          children: [
            '1. 튜토리얼 개요',
            '2. 연결 설정하기',
            '3. 트랜잭션과 쿼리 실행하기',
            '4. 데이터베이스 메타데이터로 작업하기',
            '5.1. Core와 ORM 방식으로 행 조회하기',
            '5.2. Core 방식으로 행 삽입하기',
            '5.3. Core 방식으로 행 수정 및 삭제하기',
            '6. ORM 방식으로 데이터 조작하기',
          ]
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
