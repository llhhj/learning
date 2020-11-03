const {
    JSEncrypt
} = require('jsencrypt');
var JPass = require('jpass').JPass;


export function rsaEncrypt(data) {
    data = JSON.stringify(data)
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
    return decrsaData
}

export function rsaDecryptRes(data) {
    const encrypt = new JSEncrypt()
    encrypt.setPrivateKey('MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBALgWxqfdSSQZOLL0kEpgKP+MKqANKMfunYLVNI5tZ1XyhUslN4KUGVGYaX65+E6LPB95XLow0jAT/gzrVvOcaS4NAF+ms1o06mGksh6ULkQgzfZVTMwB5xKy3h9IV/8Sn/bG43ftbGS0Of1/kEhPr38eJMrvgDcQE+cloGObhtibAgMBAAECgYATJrtwB0Nur/kIFQ1Vz380Zr6ge/38HsTgMZIQJy2S8XIQiUSnHwUrSfHfrzU35qBQne2ZqS6Utd++NFWNbn46kQGUbqwAYaNnum8Kpo2jU4dJk9soGJrkwe7sVKltjm8H7zZaHeNTSkINkNwB1D5vBCSc0ht/4tUPGdOJWZQxoQJBAOReYl0s1j1CKfndp2jeYM9j6sSvTV4gkREIsdEIkH11CPAlsc6ItMqLyK/ocWc7raD4ayQ0hBhhiM3f3qhaGGkCQQDOXNkBt9BHHbC6Htgh6hAuZZKxjfOlsNPn1aSaA21i6CfNpN4RKvvGVdNg1Lh8J7MNvuySItj0DoNU391yByhjAkBENQR/+8JJLZfH7zHvGmwjxR37fLhI4sUxJz2kx0AQmIIA5+FBZIdK75ETKQOl56cmKswlViIV/huUEcc41R/xAkEAmcZOXx1eMuBJBShe3kbQ8AH4oh6pZNqzzZpCIhJTvNRKdM9aO2jQXScvcISTRNFAeAnBt9QH3zXBX8nB9mqnCQJABSyA1qpYXEd94y+C5NTQlllQyo+pOp7oMK2LMQPzqmB9/PVH8RcLPmhx4GsD622k5pWTUEgZyyHPFZI/UIgbuA==') // 私钥
    console.log(data);
    let decrsaData = encrypt.decryptLong(data)
    decrsaData = decodeURIComponent(decrsaData)
    return decrsaData
}