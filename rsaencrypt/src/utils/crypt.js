const { JSEncrypt } = require('jsencrypt');
var JPass = require('jpass').JPass;
 

export function rsaEncrypt(data) {
    // const encrypt = new JSEncrypt()
    // encrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC47pfOTeFlbjjbsfBfSJfSm/OFzAkLuQ14cn9y13y4O19fBUNhAtGZMLA6X7CDfTu5x+OMO32D7fivoG845utUGGUjkyuhXZ9xWxjYyZFR0vKsMqalQqIJQBpgQDB81YQhONhhDPPwyb/hSqrIb51bD6+hVp38aMnhfxc7FD/w4QIDAQAB') // 公钥
    data = JSON.stringify(data)
    // let b = new Base64()
    // data = encode(data)
    // data = encodeURI(data)
    // let getrsaData = encrypt.encryptLong(data)
    var jpass = new JPass()
var modulusPublic = "ALjul85N4WVuONux8F9Il9Kb84XMCQu5DXhyf3LXfLg7X18FQ2EC0ZkwsDpfsIN9O7nH44w7fYPt+K+gbzjm61QYZSOTK6Fdn3FbGNjJkVHS8qwypqVCoglAGmBAMHzVhCE42GEM8/DJv+FKqshvnVsPr6FWnfxoyeF/FzsUP/Dh";
var exponentPrivate = "AQAB"
jpass.setPublic(modulusPublic, exponentPrivate);

    let getrsaData = jpass.encrypt('BYTE_MODE', data);
    return getrsaData
}

export function rsaDecrypt(data) {
    const encrypt = new JSEncrypt()
    encrypt.setPrivateKey('MIICeQIBADANBgkqhkiG9w0BAQEFAASCAmMwggJfAgEAAoGBALjul85N4WVuONux8F9Il9Kb84XMCQu5DXhyf3LXfLg7X18FQ2EC0ZkwsDpfsIN9O7nH44w7fYPt+K+gbzjm61QYZSOTK6Fdn3FbGNjJkVHS8qwypqVCoglAGmBAMHzVhCE42GEM8/DJv+FKqshvnVsPr6FWnfxoyeF/FzsUP/DhAgMBAAECgYEAiIYrr/Qy1+y9MQN2DwHKg4L6DuaILw1YcnkkuaV3v5KlX8LE8VNhZRRapV2LNCc59nco95fbm5ANLarlMT7YryVfvMDwCjgD5L3mz8g30nPZdHUldVeLbj7pUFSLLZXHK5hvtLDba0G+8XQD8VZZSF5Y6D7Vf4kHjJ7+g1TmddkCQQDcuCotvwX4bkWLphRkhTHdn27vw5sGsuvfKrvykcipo+SiL/nW+wt2h+fLaoJH1T6MvSYEYIOoVFrQZ4ztJWMTAkEA1n4CNTIiA6nkRiohg8qdrfUmLYLCHrjvCUtqtCUyCLIkkYS5SQqOq3mnTFIpbCmE3fMSOnO/QoWv9izecY1muwJBAJJCZ5DQ2H/7cpJLh4/kw1p83+J52CzkO3EyvEDNYg8nz8W5zPEsgjgVbwBYn+RB5qUUYjDcU+Ijo9oeBEDRWYkCQQChVbC1cJsTJGP2vtPsvKez5FSuIM+AqlvqItcE34Ft9wj4h9uSbCV6J4xGJPrRR72P8LiCTPPMxp/fTEqZIOHnAkEAyoY9FukmZ4reY3J2S0ECt0n/Qx9A2hDOKA5PmB9m60dosc+RUFMckloVyizidE9rxuPxAFNUn+9k1UR8SAWCfQ==') // 私钥
    let decrsaData = encrypt.decryptLong(data)
    // let b = new Base64()
    // decrsaData = decode(decrsaData)
    // console.log(data,decrsaData);
    // decrsaData = decodeURIComponent(decrsaData)
    return decrsaData  
}   