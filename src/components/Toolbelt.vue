<template>
  <main class="toolbelt" role="main">
    <div class="in">
      <textarea v-model="input" class="input tall no-resize code" placeholder="Input"></textarea>
    </div>
    <div class="belt">
      <dropdown ref="modeMenu" :value="modes[mode].label" label="Mode" size="lg">
        <ul class="menu unlist">
          <li v-for="modeKey in Object.keys(modes)" :key="modeKey">
            <button class="menu-item" @click.prevent="selectMode(modeKey)">
              <span :class="`menu-label${mode === modeKey ? ' selected' : ''}`">{{ modes[modeKey].label }}</span>
              <span class="shortcut">{{ modes[modeKey].shortcut }}</span>
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
import Modes from '../modes'

export default {
  components: {
    Dropdown,
  },

  data() {
    return {
      input: '',
      mode: 'encodeHtml',
      modes: Modes,
      output: '',
    }
  },

  watch: {
    input () {
      this.process()
    },

    mode () {
      this.process()
    },
  },

  mounted() {
    this.clipboard()
  },

  methods: {
    /**
     * Bind copy to clipboard events
     * @return {void}
     */
    clipboard () {
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

    /**
     * Select a new mode
     * @param {string} modeKey - New mode key
     * @return {void}
     */
    selectMode (modeKey) {
      this.mode = modeKey
      this.$refs.modeMenu.toggle()
    },

    /**
     * Process current input
     * @return {void}
     */
    process () {
      // No input
      if (!this.input) return

      // Method doesn't exist
      if (!Input[this.mode]) console.warn('Mode not found:', this.mode)

      // Process by mode
      try {
        this.output = Input[this.mode](this.input)
      } catch (e) {
        this.output = e
      }
    },
  },
}
</script>
