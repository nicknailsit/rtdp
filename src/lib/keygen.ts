import {generateKeyPair} from 'crypto'

async function generateKeys(l = 2048, callback) {
    // @ts-ignore
    generateKeyPair('rsa', {
        modulusLength: l,
        publicKeyEncoding: {type: 'pkcs1', format: 'pem'},
        privateKeyEncoding: {type: 'pkcs1', format: 'pem'},
    }, (err: string, publicKey: string, privateKey: string) => {
        callback(err, publicKey, privateKey)
    })
}

export {generateKeys};
