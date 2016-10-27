<script>
import Nav from './components/Nav.vue'
import store from './vuex/store'

export default {
  name: 'App',
  store,
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  components: {
    'cart-nav': Nav
  }
}
</script>
