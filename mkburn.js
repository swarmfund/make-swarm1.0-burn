const addr = require('./addr.js')

// https://bitcoin.stackexchange.com/questions/1851/how-to-generate-a-valid-bitcoin-address-for-destroying-bitcoins

const b0 = new Buffer('SWARM')

module.exports = function mkBurn (counterpartySource, ethereumTarget) {
    
    const b1 = addr.decodeCounterparty(counterpartySource)
    const b2 = addr.decodeEthereum(ethereumTarget)

    // doesn't start with 0x04 0x03 or 0x02
    const invalidPubKey = Buffer.concat([b0, b1, b2])

    return addr.makeBitcoinAddress(invalidPubKey)
}





