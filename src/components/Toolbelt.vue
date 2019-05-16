<template>
  <main class="toolbelt" role="main">
    <div class="in">
      <textarea v-model="input" class="input tall no-resize code" placeholder="Input"></textarea>
    </div>
    <div class="belt">
      <dropdown label="Mode" value="HTML">
        <ul class="menu unlist">
          <li class="selected">
            <button class="menu-item">
              <span class="menu-label">HTML</span>
              <span class="shortcut">⌃1</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">CSS</span>
              <span class="shortcut">⌃2</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">JS</span>
              <span class="shortcut">⌃3</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">URL</span>
              <span class="shortcut">⌃4</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">Unicode</span>
              <span class="shortcut">⌃5</span>
            </button>
          </li>
        </ul>
      </dropdown>

      <dropdown label="Operation" value="Encode">
        <ul class="menu unlist">
          <li class="selected">
            <button class="menu-item">
              <span class="menu-label">Encode</span>
              <span class="shortcut">⇧⌃1</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">Decode</span>
              <span class="shortcut">⇧⌃2</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">Escape</span>
              <span class="shortcut">⇧⌃3</span>
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
    </div>
    <div class="out">
      <textarea id="out" v-model="output" class="input tall no-resize code" placeholder="Output" readonly></textarea>
    </div>
  </main>
</template>

<script>
import ClipboardJS from 'clipboard'
import Dropdown from './Dropdown.vue'

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
}
</script>
