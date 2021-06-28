module.exports = {
  lang: 'zh-CN',
  title: 'Napsta\'s Blog',
  description: '111',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    // sidebar: 'auto'
    sidebar: [
      {
        text: 'Leetcode',
        link: '/leetcode/',
        children: [
          {
            text: '14.最长公共前缀',
            link: '/leetcode/14.md'
          }
        ]
      },
      {
        text: 'Others',
        link: '/others/',
        children: [
          // SidebarItem
          // {
          //   text: 'github',
          //   link: 'https://github.com/Alienboyplus',
          // },
          // {
          //   text: 'bilibili',
          //   link: 'https://space.bilibili.com/13789894'
          // }
        ],
      },
    ],
  },
}