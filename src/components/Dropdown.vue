<template>
  <div class="dropdown">
    <button class="btn sm pill light" :aria-expanded="active" @click.prevent="toggle">
      <span v-if="label" class="dropdown-label">{{ label }}:</span>
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
    label: { type: String, default: undefined },
    size: { type: String, default: undefined },
    value: { type: String, default: '' },
  },

  data () {
    return {
      active: false,
      clickListener: undefined,
      keyListener: undefined,
    }
  },

  /**
   * Add event listeners on mount
   */
  mounted () {
    // Blur listener
    this.clickListener = document.addEventListener('click', e => this.blur(e))

    // Keydown listener
    this.keyListener = document.addEventListener('keydown', e => this.keydown(e))
  },

  /**
   * Remove event listeners on destroy
   */
  destroyed () {
    // Remove listeners
    document.removeEventListener('click', this.clickListener)
    document.removeEventListener('keydown', this.keyListener)
  },

  methods: {
    /**
     * Toggle the dropdown menu
     * @return {void}
     */
    toggle () {
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
     * Keydown listener
     * @param {KeyboardEvent} e - Keydown event
     * @return {void}
     */
    keydown (e) {
      // Inactive, or not focused in dropdown
      if (!this.active || !this.$el.contains(e.target)) return

      // Blur on escape
      if (e.key === 'Escape') {
        e.preventDefault()
        this.toggle()
      }

      // Next focusable on down arrow
      else if (e.key === 'ArrowDown') {
        // Get focus data
        const focus = this.focusables()

        // Focus on next focusable
        if (focus.index + 1 < focus.focusables.length) {
          e.preventDefault()
          focus.focusables[focus.index + 1].focus()
        }
      }

      // Previous focusable on up arrow
      else if (e.key === 'ArrowUp') {
        // Get focus data
        const focus = this.focusables()

        // Focus on next focusable
        if (focus.index - 1 >= 0) {
          e.preventDefault()
          focus.focusables[focus.index - 1].focus()
        }
      }
    },

    /**
     * Get all focusables in this component
     * @return {Object}
     */
    focusables () {
      // Get all focusables
      const focusables = this.$el.querySelectorAll('button, [href]')

      // Get current focus index
      let index = 0
      focusables.forEach((focusable, i) => {
        if (focusable.matches(':focus')) {
          index = i
          return
        }
      })

      return { focusables, index }
    },
  },
}
</script>
