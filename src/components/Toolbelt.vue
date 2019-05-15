<template>
  <main class="toolbelt" role="main">
    <div class="in">
      <textarea class="input tall no-resize code" placeholder="Input"></textarea>
    </div>
    <div class="belt">
      <dropdown label="Mode" value="HTML">
        <ul class="menu unlist">
          <li class="selected">
            <button class="menu-item">
              <span class="menu-label">HTML</span>
              <span class="menu-shortcut">⌃1</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">CSS</span>
              <span class="menu-shortcut">⌃2</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">JS</span>
              <span class="menu-shortcut">⌃3</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">URL</span>
              <span class="menu-shortcut">⌃4</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">Unicode</span>
              <span class="menu-shortcut">⌃5</span>
            </button>
          </li>
        </ul>
      </dropdown>

      <dropdown label="Operation" value="Encode">
        <ul class="menu unlist">
          <li class="selected">
            <button class="menu-item">
              <span class="menu-label">Encode</span>
              <span class="menu-shortcut">⇧⌃1</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">Decode</span>
              <span class="menu-shortcut">⇧⌃2</span>
            </button>
          </li>
          <li>
            <button class="menu-item">
              <span class="menu-label">Escape</span>
              <span class="menu-shortcut">⇧⌃3</span>
            </button>
          </li>
        </ul>
      </dropdown>
    </div>
    <div class="out">
      <textarea class="input tall no-resize code" placeholder="Output"></textarea>
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

    }
  },
}
</script>
