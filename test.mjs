import randomizr from './index.mjs'

const iter = 100000
const log = console.log

function testStringConcat() {
  console.time('test: string concat')
  let s = ''
  for (let i = 0; i < iter; i++) {
    s += i
  }
  console.timeEnd('test: string concat')
}

function testStringArray() {
  console.time('test: string array')
  let s = []
  for (let i = 0; i < iter; i++) {
    s.push(i)
  }
  s.join('')
  console.timeEnd('test: string array')
}

function testHash() {
  console.time('finished')
  log('\nhash:', randomizr())
  console.timeEnd('finished')
}

function testHashUsingGenerate() {
  console.time('finished')
  log('\nhash [ using generate() ]:', randomizr.generate())
  console.timeEnd('finished')
}

function testHashWithCamelCase() {
  console.time('finished')
  log('\nhash [ generate() + camelcase ]:', randomizr.generate(64, {
    camelCase: true
  }))
  console.timeEnd('finished')
}

function testRangeDefault() {
  console.time('finished')
  log('\nrange[ 0-9 ]:', randomizr.range())
  console.timeEnd('finished')
}

function testRangeCustom() {
  console.time('finished')
  log(`\nrange[ 1-${iter} ]:`, randomizr.range(0, iter))
  console.timeEnd('finished')
}

function testGenerateDefault() {
  console.time('finished')
  log('\ngenerate:', randomizr.generate())
  console.timeEnd('finished')
}

function testGenerateWithAdd() {
  console.time('finished')
  log('\ngenerate [ add ]:', randomizr.generate(32, {
    add: '~`!@#$%^&*()_+?><,.;:\'"[{]}\\|"\'\`'
  }))
  console.timeEnd('finished')
}

function testGenerateCustomBinary() {
  console.time('finished')
  log('\ngenerate custom [ 1/0 ]:', randomizr.generate(32, {
    custom: '10'
  }))
  console.timeEnd('finished')
}

function testGenerateCustomChars() {
  console.time('finished')
  log('\ngenerate [ custom chars(32) ]:', randomizr.generate(32, {
    custom: '~`!@#$%^&*()_+?><,.;:\'"[{]}\\|"\'\`'
  }))
  console.timeEnd('finished')
}

function testGenerateAlpha() {
  console.time('finished')
  log('\ngenerate [ alpha(32) ]):', randomizr.generate(32, {
    type: 'alpha'
  }))
  console.timeEnd('finished')
}

function testGenerateAlphaCamelCase() {
  console.time('finished')
  log('\ngenerate custom [ alpha(32) + camelCase ]:', randomizr.generate(32, {
    type: 'alpha',
    camelCase: true
  }))
  console.timeEnd('finished')
}

function testGenerateNumeric() {
  console.time('finished')
  log('\ngenerate custom [ numeric(32) ]:', randomizr.generate(32, {
    type: 'numeric'
  }))
  console.timeEnd('finished')
}

// Run all tests
testStringConcat()
testStringArray()
testHash()
testHashUsingGenerate()
testHashWithCamelCase()
testRangeDefault()
testRangeCustom()
testGenerateDefault()
testGenerateWithAdd()
testGenerateCustomBinary()
testGenerateCustomChars()
testGenerateAlpha()
testGenerateAlphaCamelCase()
testGenerateNumeric()
