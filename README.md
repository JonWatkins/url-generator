### URL Generator

![Unit Tests](https://travis-ci.org/JonWatkins/url-generator.svg?branch=master)

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

The url generator takes an array of parameters with a key and value, the value can be either an array or a string

```JavaScript
create({
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