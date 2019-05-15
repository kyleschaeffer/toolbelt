<template>
  <div class="app">
    <main class="main" role="main">
      <p>Hello.</p>
    </main>

    <footer class="colophon" role="contentinfo">Toolbelt by <a href="https://twitter.com/kyleschaeffer">@kyleschaeffer</a></footer>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
import queryString from 'query-string'

export default {
  components: {

  },

  data() {
    return {

    }
  },

  async mounted() {
    // Copy to clipboard
    const clipboard = new ClipboardJS('.copy')
    clipboard.on('success', function(e) {
      e.trigger.classList.add('copied')
      setTimeout(() => {
        e.trigger.classList.remove('copied')
      }, 3000)
      e.clearSelection()
    })
  },

  methods: {
    scrollTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
  },
}
</script>
