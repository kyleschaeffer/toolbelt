<template>
  <div class="dropdown">
    <button class="btn sm pill light" :aria-expanded="active" @click.prevent="toggle">
      <span class="dropdown-label">{{ label }}:</span>
      <strong class="dropdown-value">{{ value }}</strong>
      <i class="icon arrow-down flip" aria-hidden="true"></i>
    </button>
    <div :class="`dropdown-menu drop-in${active ? ' active' : ''}${size ? ` ${size}` : ''}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    size: { type: String, default: undefined },
  },

  data() {
    return {
      active: false,
    }
  },

  mounted() {
    // Blur listener
    document.addEventListener('click', e => this.blur(e))

    // Keydown listener
    document.addEventListener('keydown', e => this.keydown(e))
  },

  methods: {
    toggle() {
      this.active = !this.active
    },

    /**
     * Blur on click-away
     * @param {MouseEvent} e - Click event
     * @return {void}
     */
    blur (e) {
      // Already inactive, or clicking within dropdown
      if (!this.active || this.$el.contains(e.target)) return

      // Blur
      e.preventDefault()
      this.toggle()
    },

    /**
     * Handle keydowns
     * @param {KeyboardEvent} e - Keydown event
     * @return {void}
     */
    keydown (e) {
      // Already inactive, or not focused in dropdown
      if (!this.active || !this.$el.contains(e.target)) return

      // Blur on escape
      if (e.key !== 'Escape') {
        e.preventDefault()
        this.toggle()
      }
    },
  },
}
</script>
