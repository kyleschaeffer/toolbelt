<template>
  <div class="app">
    <toolbelt></toolbelt>

    <footer class="footer" role="contentinfo">
      <p class="colophon">
        <strong>Toolbelt</strong> by <a href="https://twitter.com/kyleschaeffer">@kyleschaeffer</a>
      </p>
      <p class="social">
        <a href="https://twitter.com/kyleschaeffer?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-screen-name="false" data-dnt="true" data-show-count="false">Follow @kyleschaeffer</a>
        <a href="https://twitter.com/intent/tweet" class="twitter-share-button" data-text="Nice tool for encoding, decoding, and escaping strings" data-url="https://tbelt.io" data-via="kyleschaeffer" data-related="kyleschaeffer" data-dnt="true">Tweet</a>
      </p>
      <ul class="footer-links unlist">
        <li>
          <a href="https://github.com/kyleschaeffer/toolbelt">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            <span class="label" aria-hidden="true">GitHub</span>
            <span class="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://glyphs.io/">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><path fill-rule="evenodd" d="M16,0 L24,0 L24,39 L16,39 L16,0 Z M40,25 L48,25 L48,64 L40,64 L40,25 Z M0,16 L15,16 L15,24 L0,24 L0,16 Z M40,0 L48,0 L48,15 L40,15 L40,0 Z M16,49 L24,49 L24,64 L16,64 L16,49 Z M49,40 L64,40 L64,48 L49,48 L49,40 Z M25,16 L64,16 L64,24 L25,24 L25,16 Z M0,40 L39,40 L39,48 L0,48 L0,40 Z" /></svg>
            <span class="label" aria-hidden="true">Glyphs</span>
            <span class="sr-only">Glyphs</span>
          </a>
        </li>
        <li>
          <a href="https://screem.io/">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><g fill-rule="evenodd"><path d="M0,64 L64,64 L64,0 L0,0 L0,64 Z M4,60 L60,60 L60,4 L4,4 L4,60 Z" /><path d="M8,56 L8,52 L56,52 L56,56 L8,56 Z M8,48 L8,16 L12,16 L12,48 L8,48 Z M16,48 L16,40 L20,40 L20,48 L16,48 Z M24,48 L24,40 L28,40 L28,48 L24,48 Z M32,48 L32,30 L36,30 L36,48 L32,48 Z M40,48 L40,40 L44,40 L44,48 L40,48 Z M48,48 L48,40 L52,40 L52,48 L48,48 Z" /></g></svg>
            <span class="label" aria-hidden="true">Screem</span>
            <span class="sr-only">Screem</span>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Toolbelt from './Toolbelt.vue'

export default {
  components: {
    Toolbelt,
  },
}
</script>
