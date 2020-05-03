# Randomizr

Random string generator

### Install

```sh
npm install randomizr
```

```js
const randomizr = require('randomizr');

let hash = randomizr();
```

## Methods

### `randomizr()`
Generates a random `sha256` hash

```js
randomizr()
```

### `randomizr.range([Number: min], [Number: max])`
Generate a random number between the min - max range

```js
randomizr.range(0, 99)
```

### `randomizr.generate([Number: length], [Object: properties])`
Generates a random string based on your preferences


#### Arguments
| Arguments | Description |
|:----------|:------------|
| **`length`** | (Optional) The string length you want to generate **\[ default: 64 \]** |
| **`properties`** | (Optional) Custom properties |

#### `properties`
- **`type`** - set character options:  **\[ default: alphanumeric \]**
  - `alpha` - alphabet only
  - `numeric` - numbers only
- **`add`** - add custom characters
- **`custom`** - use custom characters only
- **`camelCase`** - randomize lower or upper case for alphabets

### Examples

#### 256 alphanumeric characters
```js
randomizr.generate(256)
```

#### 32 characters, alphanumeric + camel-case
```js
randomizr.generate(32, {
  camelCase: true
})
```

#### 128 characters, numbers only
```js
randomizr.generate(128, {
  type: 'numeric'
})
```

#### 16 characters, 1 or 0
```js
randomizr.generate(16, {
  custom: '10'
})
```

#### 16 characters, add custom characters
```js
randomizr.generate(16, {
  add: '#@!$%'
})
```

#### 16 characters, only these custom characters
```js
randomizr.generate(16, {
  custom: '$-<>?:;'
})
```
