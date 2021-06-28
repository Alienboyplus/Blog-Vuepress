import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Hello VuePress",["/index.html","/README.md"]],
  ["v-3fce4c4c","/second.html","The second one",["/second.md"]],
  ["v-fb0f0066","/guide/getting-started.html","试试！",["/guide/getting-started.md"]],
  ["v-0978b044","/guide/markdown.html","",["/guide/markdown.md"]],
  ["v-fffb8e28","/guide/","README for guide",["/guide/index.html","/guide/README.md"]],
  ["v-04b7a956","/leetcode/14.html","14. 最长公共前缀",["/leetcode/14.md"]],
  ["v-31987621","/leetcode/","Leetcode笔记",["/leetcode/index.html","/leetcode/README.md"]],
  ["v-25b47c13","/others/","一些其他平台的账号",["/others/index.html","/others/README.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
