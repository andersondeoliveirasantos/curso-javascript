'use strict'

let oops = 'test'

// delete Object.prototype = TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

function test() {
  'use strict'
    let testing = 'test'
}

test()

// false.prop = ' '
// 'test'.prop = ' '