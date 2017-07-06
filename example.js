
const mkburn = require('./mkburn.js')

const from = '14ZfeTmV5koPHfHubuNU7wt4WZfyaJRtGa'
const to = '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed'

const burn = mkburn(from, to)

console.log(burn)
