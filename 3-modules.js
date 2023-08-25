const names = require('./4-names')
const sayHello = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')
sayHello('susan')
sayHello(names.john)
sayHello(names.peter)

const os = require('os') //already built in module

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);