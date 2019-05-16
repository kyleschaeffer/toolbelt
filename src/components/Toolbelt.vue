<template>
  <main class="toolbelt" role="main">
    <div class="in">
      <textarea v-model="input" class="input tall no-resize code" placeholder="Input"></textarea>
    </div>
    <div class="belt">
      <dropdown label="Mode" value="HTML Encode" size="lg">
        <ul class="menu unlist">
          <li class="selected">
            <button class="menu-item">
              <span class="menu-label">HTML Encode</span>
              <span class="shortcut">⌃1</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">HTML Decode</span>
              <span class="shortcut">⌃2</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">JavaScript Escape</span>
              <span class="shortcut">⌃3</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">CSS Escape</span>
              <span class="shortcut">⌃4</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">URI Encode</span>
              <span class="shortcut">⌃5</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">URI Decode</span>
              <span class="shortcut">⌃6</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">Base64 Encode</span>
              <span class="shortcut">⌃7</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">Base64 Decode</span>
              <span class="shortcut">⌃8</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">RegEx Escape</span>
              <span class="shortcut">⌃9</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">JSON Stringify</span>
              <span class="shortcut">⌃0</span>
            </button>
          </li>
        </ul>
      </dropdown>

      <span class="separator"></span>

      <button class="copy-btn btn sm pill info tooltip-anchor" data-clipboard-target="#out">
        <span class="label">Copy</span>
        <i class="icon copy" aria-hidden="true"></i>
        <span class="tooltip fade-in">Copy output to clipboard <span class="shortcut light">⌃⏎</span></span>
        <span class="tooltip tooltip-copied fade-in">Copied</span>
      </button>

      <div class="arrow" aria-hidden="true">⬇</div>
    </div>
    <div class="out">
      <textarea id="out" v-model="output" class="input tall no-resize code" placeholder="Output" readonly></textarea>
    </div>
  </main>
</template>

<script>
import ClipboardJS from 'clipboard'
import Dropdown from './Dropdown.vue'
import Input from '../input'

export default {
  components: {
    Dropdown,
  },

  data() {
    return {
      input: '',
      output: '',
    }
  },

  watch: {
    input (value) {
      if (!value) return

      try {
        this.output = Input.regexEscape(value)
      } catch (e) {
        this.output = e
      }
    },
  },

  mounted() {
    // Copy to clipboard
    const clipboard = new ClipboardJS('.copy-btn')
    clipboard.on('success', function(e) {
      e.trigger.classList.add('copied')
      setTimeout(() => {
        e.trigger.classList.remove('copied')
      }, 3000)
      e.clearSelection()
    })
  },
}
</script>
