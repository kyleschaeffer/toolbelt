import Entities from './entities'

/**
 * Input string conversion utilities
 */
export default class Input {
  /**
   * Encode HTML entities in given string
   *
   * @param {string} str - Input string
   * @return {string}
   */
  static htmlEncode (str) {
    return str
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  /**
   * Decode HTML entities in given string
   *
   * @param {string} str - Input string
   * @return {string}
   */
  static htmlDecode (str) {
    Object.keys(Entities).forEach(char => {
      const pattern = new RegExp(`&${Entities[char].join(';|&')};`, 'g')
      str = str.replace(pattern, char)
    })
    return str
  }

  /**
   * Encode characters in given URL string
   *
   * @param {string} str - Input string
   * @return {string}
   */
  static urlEncode (str) {
    return encodeURIComponent(str)
  }

  /**
   * Decode characters in given URL string
   *
   * @param {string} str - Input string
   * @return {string}
   */
  static urlDecode (str) {
    return decodeURIComponent(str)
  }

  /**
   * Escape characters in given RegEx string
   *
   * @param {string} str - Input string
   * @return {string}
   */
  static regexEscape (str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }
}
