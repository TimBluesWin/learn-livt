import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import MainLayout from '@/Layouts/MainLayout.vue'

createInertiaApp({
  // async: promises. Those functions work in the background. When ready return some function
  resolve: async (name) => {
    // we can import multiple module
    const pages = import.meta.glob('./Pages/**/*.vue')
    const page = await pages[`./Pages/${name}.vue`]()
    page.default.layout = page.default.layout  || MainLayout

    return page

  },
  // normal function:
  // function () {}
  // this keyword: depends on how the function was called. Arrow function refers to the parent
  // We pass an object to the setup method
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props)})
      .use(plugin)
      .mount(el)
  },
})
