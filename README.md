
usage:

```js
const mkburn = require('./mkburn.js')

const from = '14ZfeTmV5koPHfHubuNU7wt4WZfyaJRtGa'
const to = '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed'

const burn = mkburn(from, to)
```

this

1. checks that `from` is a valid BTC address
2. checks that `to` is a valid ETH address
3. ensures that the resulting address is a valid bitcoin burn address

to ensure that `burn` is a valid bitcoin address, we compute the
checksum, etc

to ensure that `burn` is a burn address, we make sure that the pubkey
is not valid, that is, no private key can be generated to match it

