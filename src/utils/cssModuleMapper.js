/**
 * @typedef {{[key:string] : string}} CSSModule
 */

/**
 * Function for join multiple CSS Modules classes without typing
 * crazy string literal
 * e.g. `${styles.foo} ${styles.bar}` become `css('foo', 'bar')`
 *
 * @param {CSSModule} styles Default export from '*.module.css' files
 *
 * @example [ How to use ]
 * import CSSModuleMapper from './path/to/this/file'
 * import styles from '*.module.css'
 *
 * const css = CSSModuleMapper(styles)
 * // use in JSX
 * <div className={css('foo', 'bar')}>Test</div>
 */
const CSSModuleMapper = (styles) =>
  /**
   * @param {string[]} classesName Array of class name
   */
  (...classesName) => {
    return classesName
      .map((name) => styles[name])
      .filter((name) => name !== '')
      .join(' ')
  }

export default CSSModuleMapper
