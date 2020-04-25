import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  onDone(el: Element) {
    // when scrolling within a page, don't push to history or jump around when offset is set
    history.replaceState({}, document.title, `#${el.id}`)
  }
})
