import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ded2f50 = () => interopDefault(import('../client/pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _351d0e9b = () => interopDefault(import('../client/pages/play/clock.vue' /* webpackChunkName: "pages/play/clock" */))
const _8537ff4c = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5ded2f50,
    name: "about"
  }, {
    path: "/play/clock",
    component: _351d0e9b,
    name: "play-clock"
  }, {
    path: "/",
    component: _8537ff4c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
