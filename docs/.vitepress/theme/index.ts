import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import AsideSponsors from './components/AsideSponsors.vue'
import './styles/vars.css'
import './custom.css'
import beiti from './components/beiti.vue'
import kaodian from './components/kaodian.vue';
import Tenant from './components/Tenant.vue';
import Section from './components/Section.vue';
import Sectiontwo from './components/Sectiontwo.vue';
import NewLayout from '../theme/NewLayout.vue';
import son from './components/son.vue';
import father from './components/father.vue';
import Option from './components/Option.vue';

export default {
  ...DefaultTheme,
  Layout: NewLayout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     // 'home-features-after': () => h(HomeSponsors),
  //     'aside-ads-before': () => h(AsideSponsors)
  //   })
  // },
  enhanceApp({ app,router, siteData }) {
    app.component('beiti', beiti)
    app.component('kaodian', kaodian)
    app.component('AsideSponsors', AsideSponsors)
    app.component('Tenant', Tenant)
    app.component('Section', Section)
    app.component('Sectiontwo', Sectiontwo)
    app.component('Option', Option)
    app.component('father', father)
    app.component('son', son)
  }
}
