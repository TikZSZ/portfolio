/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "*.png" {
  const value: any;
  export = value;
}


import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    requiresAuth?: boolean
    // must be declared by every route
  }
}

declare module 'vue' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    VeeForm: typeof import('vee-validate')['Form']
    VeeField: typeof import('vee-validate')['Field']
    ErrorMessage: typeof import('vee-validate')['ErrorMessage']
  }
}