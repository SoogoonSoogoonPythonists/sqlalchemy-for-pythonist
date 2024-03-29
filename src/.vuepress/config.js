const { description } = require('../../package')

module.exports = {
  base: "/sqlalchemy-for-pythonist/",

  // Path
  locales: {
    '/': {
      lang: 'ko',
      title: '파이썬 개발자를 위한 SQLAlchemy',
      description: description,
    },
    '/en/': {
      lang: 'en-US',
      title: 'SQLAlchemy for Python Developers',
      description: 'This is a document that simplifies SQLAlchemy for easy understanding.',
    }
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'google-site-verification', content: 'wjX_mSoZBgO9SZMvjr96yOjo6n3_7pS8xNdmzDl1ESw' }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-SNPCYHY4R2",
      },
    ],
    ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SNPCYHY4R2');"]],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    locales: {
      '/': {
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
                '7. ORM 방식으로 관련 개체 작업하기',
              ]
            },
          ]
        }
      },
      '/en/': {
        repo: '',
        editLinks: true,
        docsDir: '/en/',
        editLinkText: '/en/',
        lastUpdated: true,
        smoothScroll: true,
        nav: [
          {
            text: 'GitHub',
            link: 'https://github.com/SoogoonSoogoonPythonists/sqlalchemy-for-pythonist'
          },
        ],
        sidebar: {
          '/en/tutorial/': [
            {
              title: 'Tutorial',
              path: '/en/tutorial/',
              collapsable: false,
              children: [
                '1. Tutorial Overview',
                '2. Setting Up a Connection',
                '3. Executing Transactions and Queries',
                '4. Working with Database Metadata',
                '5.1. Querying Rows Using Core and ORM',
                '5.2. Inserting Rows Using Core',
                '5.3. Modifying and Deleting Rows Using Core',
                '6. Manipulating Data Using ORM',
                '7. Working with Related Objects Using ORM',
              ]
            },
          ]
        }
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ["sitemap", { hostname: "https://soogoonsoogoonpythonists.github.io/sqlalchemy-for-pythonist/" }],
    ["@vuepress/last-updated"],
  ],
}
