/**
 * Simple class name builder helper.
 * @param {object} style - given style object
 * @param {object} config - config object, `b` is required while `e` and `m` are optional
 * @returns {string|object} - either '' or class name
 */
const classNameHelper = (style, { b, e, m }) => {
  const BLOCK = b;
  const ELEMENT = typeof e !== 'undefined' ? `__${e}` : '';
  const MODIFIER = typeof m !== 'undefined' ? `--${m}` : '';

  const BEM = `${BLOCK}${ELEMENT}${MODIFIER}`;

  return BEM in style ?  style[BEM] : '';
};

export default classNameHelper;
