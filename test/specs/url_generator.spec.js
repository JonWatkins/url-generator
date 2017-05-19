'use strict'

import {mapValues, cartesianValues, create} from '../../src/index'

describe('URL Generator', () => {
  let baseUrl
  let stringVal
  let arrayVal

  beforeEach(function () {
    baseUrl = 'http://www.google.com'
    stringVal = [
      {
        key: 'utm_campaign',
        value: 'google'
      }
    ]
    arrayVal = [
      {
        key: 'utm_campaign',
        value: [
          'google',
          'twitter',
          'facebook'
        ]
      }
    ]
  })

  afterEach(function () {
    baseUrl = null
    stringVal = null
    arrayVal = null
  })

  describe('mapValues', () => {
    it('should be a function', () => {
      expect(typeof mapValues).to.equal('function')
    })

    it('should be able to map a string value', () => {
      const result = mapValues(stringVal)
      expect(result[0][0]).to.equal('&utm_campaign=google')
    })

    it('should be able to map an array of strings', () => {
      const result = mapValues(arrayVal)
      expect(result[0][0]).to.equal('&utm_campaign=google')
      expect(result[0][1]).to.equal('&utm_campaign=twitter')
      expect(result[0][2]).to.equal('&utm_campaign=facebook')
    })
  })

  describe('cartesianValues', () => {
    let params

    beforeEach(function () {
      params = mapValues(stringVal)
    })

    afterEach(function () {
      params = null
    })

    it('should be a function', () => {
      expect(typeof cartesianValues).to.equal('function')
    })

    it('should return a generator', () => {
      const gen = cartesianValues(params)
      const vals = [...gen]
      expect(vals[0]).to.equal('&utm_campaign=google')
    })
  })

  describe('create', () => {
    it('should be a function', () => {
      expect(typeof create).to.equal('function')
    })

    it('should be able to create a list of unique urls', next => {
      create({
        url: baseUrl,
        params: arrayVal
      })
      .then(result => {
        expect(result[0]).to.equal(`${baseUrl}?utm_campaign=google`)
        expect(result[1]).to.equal(`${baseUrl}?utm_campaign=twitter`)
        expect(result[2]).to.equal(`${baseUrl}?utm_campaign=facebook`)
        next()
      })
    })
  })
})
