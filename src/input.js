import base64 from 'base-64'
import Entities from './entities'

/**
 * Input string conversion utilities
 */
export default class Input {
  /**
   * Encode HTML entities in given string
   * @param {string} str - Input string
   * @return {string}
   */
  static encodeHtml (str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  /**
   * Decode HTML entities in given string
   * @param {string} str - Input string
   * @return {string}
   */
  static decodeHtml (str) {
    Object.keys(Entities).forEach(char => {
      const pattern = new RegExp(`&${Entities[char].join(';|&')};`, 'g')
      str = str.replace(pattern, char)
    })
    return str
  }

  /**
   * Escape single quotes in given string
   * @param {string} str - Input string
   * @return {string}
   */
  static escapeSingleQuotes (str) {
    return str.replace(/'/g, '\\\'')
  }

  /**
   * Escape double quotes in given string
   * @param {string} str - Input string
   * @return {string}
   */
  static escapeDoubleQuotes (str) {
    return str.replace(/"/g, '\\\"')
  }

  /**
   * Encode characters in given URI string
   * @param {string} str - Input string
   * @return {string}
   */
  static encodeUri (str) {
    return encodeURIComponent(str)
  }

  /**
   * Decode characters in given URI string
   * @param {string} str - Input string
   * @return {string}
   */
  static decodeUri (str) {
    return decodeURIComponent(str)
  }

  /**
   * Base64 encode given string
   * @param {string} str - Input string
   * @return {string}
   */
  static base64Encode (str) {
    return base64.encode(str)
  }

  /**
   * Base64 decode given string
   * @param {string} str - Input string
   * @return {string}
   */
  static base64Decode (str) {
    return base64.decode(str)
  }

  /**
   * Escape characters in given RegEx string
   * @param {string} str - Input string
   * @return {string}
   */
  static escapeRegEx (str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  /**
   * Beautify given JSON string
   * @param {string} json - Input JSON
   * @return {string}
   */
  static beautifyJson (json) {
    // Parse JSON
    try {
      json = JSON.parse(json)
    } catch (e) {
      return e
    }

    // Stringify
    return JSON.stringify(json, null, 2)
  }

  /**
   * Minify given JSON string
   * @param {string} json - Input JSON
   * @return {string}
   */
  static minifyJson (json) {
    // Parse JSON
    try {
      json = JSON.parse(json)
    } catch (e) {
      return e
    }

    // Stringify
    return JSON.stringify(json)
  }
}
