# getzodiac

## get the zodiac by year

## example

```js
var getzodiac = require('getzodiac');
var year = 2015 ;  // 参数正确 返回结果为对象
console.log(getzodiac(year));//{ index: 7, en: 'sheep', cn: '羊' }
var year = 'sdf' ; // 参数有误 返回结果为''
console.log(getzodiac(year)); 
```

## Installation

```bash
$ npm install getzodiac
```


## License

  [MIT](LICENSE)

