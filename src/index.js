'use strict'

/**
 * Returns a multidimensional array containing all url parameters with both
 * the key and value ready to add to a url
 *
 * @export
 * @param {Array} arr
 * @return {Array}
 */
export function mapValues(arr) {
  return arr.map(param => {
    const res = Array.isArray(param.value) ? param.value : [param.value]
    return res.map(value => `&${param.key}=${value}`)
  })
}

/**
 * Creates a generator which returns all the different permutations of the
 * query strings for the given parameters
 *
 * @export
 * @param {Array} arr
 * @return {Generator}
 */
export function cartesianValues(arr) {
  const data = new Array(arr.length)
  return (function *recursive(pos) {
    if (pos === arr.length) yield data.join('')
    else for (let i = 0; i < arr[pos].length; ++i) {
      data[pos] = arr[pos][i]
      yield* recursive(pos + 1)
    }
  }(0))
}

/**
 * Creates unique urls for all permutations of the given parameters
 *
 * useage:
 *
 *  create({
 *    url: 'http://www.google.com',
 *    params: [
 *      {
 *        key: 'utm_campaign',
 *        value: [
 *          'google',
 *          'facebook',
 *          'twitter'
 *        ]
 *      }
 *    ]
 *  }).then(result => {
 *    console.log(result)
 *  }).catch(error => {
 *    console.log(error)
 *  })
 *
 *  // urls[
 *  //  'http://www.google.com?utm_campaign=facebook',
 *  //  'http://www.google.com?utm_campaign=facebook',
 *  //  'http://www.google.com?utm_campaign=facebook'
 *  // ]
 *
 * @export
 * @param {Object} options - The options for the url to build
 * @return {Array} - The unique list of generated URL's
 */
export async function create(options) {
  const {url, params} = options
  return [...cartesianValues(mapValues(params))].map(i => {
    return `${url}${i.replace('&', '?')}`
  })
}

export default {
  mapValues,
  cartesianValues,
  create
}
