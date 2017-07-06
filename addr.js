const bs58 = require('bs58')
const bs58check = require('bs58check')
const ethjs = require('ethereumjs-util')

exports.decodeCounterparty = function (counterpartyAddress) {
    return bs58check.decode(counterpartyAddress)
}

exports.decodeEthereum = function (ethereumAddress) {
    if (!ethjs.isValidAddress(ethereumAddress))
        throw new Error('not a valid ether address')

    return ethjs.toBuffer(ethereumAddress)
}



const c = require('crypto')

// btc address is bs58(`version;hash;checksum`)
// hash = ripemd160(sha256(pubkey))
// checksum = sha256(sha256( version;hash ))

// https://21.co/learn/generate-a-p2pkh-address/#generate-a-public-key

exports.makeBitcoinAddress = function (pubkey) {
    const d1 = c.createHash('sha256').update(pubkey).digest()
    const hash = c.createHash('ripemd160').update(d1).digest()

    const version = new Buffer('00', 'hex')
    const cbuf = Buffer.concat([version, hash])
    const cd1 = c.createHash('sha256').update(cbuf).digest()
    const cd2 = c.createHash('sha256').update(cd1).digest()
    const checksum = cd2.slice(0, 4)

    const address = Buffer.concat([version, hash, checksum])
    const encAddr = bs58.encode(address)

    // ensure that it's valid
    bs58check.decode(encAddr)

    return encAddr
}

