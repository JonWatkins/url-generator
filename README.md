# URL Generator

[![licence](https://badgen.net/github/license/jonwatkins/url-generator)](https://github.com/JonWatkins/url-generator/blob/master/LICENCE)
[![npm](https://img.shields.io/npm/v/url-generator.svg)](https://www.npmjs.com/package/url-generator)
[![size](https://badgen.net/bundlephobia/minzip/url-generator)](https://www.npmjs.com/package/url-generator)
[![Build Status](https://travis-ci.org/JonWatkins/url-generator.svg?branch=master)](https://travis-ci.org/JonWatkins/url-generator)
[![MAINTAINABILITY](https://badgen.net/codeclimate/maintainability/JonWatkins/url-generator)](https://codeclimate.com/github/JonWatkins/url-generator)
[![npm](https://img.shields.io/npm/dm/url-generator.svg)](https://www.npmjs.com/package/url-generator)

A simple JavaScript url generator, takes an array of parameters and returns all possible permutations of the url as an array

## Installation

For use with node you can either use yarn or npm

```
yarn install url-generator --save
```

Or for use in the browser you can intsall from bower
```
bower install url-generator --save
```

## Useage

### create

```JavaScript
urlGenerator.create({
  url: 'http://www.google.com', 
  params: [
    {
      key: 'utm_campaign',
      value: [
        'google',
        'twitter',
        'facebook'
      ]
    },
    {
      key: 'utm_term',
      value: 'something'
    }
  ]
}).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})
```

### search

```JavaScript
urlGenerator.search([
  {
    key: 'utm_campaign',
    value: [
      'google',
      'twitter',
      'facebook'
    ]
  },
  {
    key: 'utm_term',
    value: 'something'
  }
]).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})
```

### slug

```JavaScript
urlGenerator.slug('Hello World')
```

### parseUrl

```JavaScript
urlGenerator.parseUrl('http://www.google.com')
```
