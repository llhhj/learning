const { JSEncrypt } = require('encryptlong');

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
     var t = "";
     var n, r, i, s, o, u, a;
     var f = 0;
     e = Base64._utf8_encode(e);
     while (f < e.length) {
      n = e.charCodeAt(f++);
      r = e.charCodeAt(f++);
      i = e.charCodeAt(f++);
      s = n >> 2;
      o = (n & 3) << 4 | r >> 4;
      u = (r & 15) << 2 | i >> 6;
      a = i & 63;
      if (isNaN(r)) {
       u = a = 64
      } else if (isNaN(i)) {
       a = 64
      }
      t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
     }
     return t
    },
    decode: function(e) {
     var t = "";
     var n, r, i;
     var s, o, u, a;
     var f = 0;
     e=e.replace(/[^A-Za-z0-9+/=]/g,"");
     while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++));
      o = this._keyStr.indexOf(e.charAt(f++));
      u = this._keyStr.indexOf(e.charAt(f++));
      a = this._keyStr.indexOf(e.charAt(f++));
      n = s << 2 | o >> 4;
      r = (o & 15) << 4 | u >> 2;
      i = (u & 3) << 6 | a;
      t = t + String.fromCharCode(n);
      if (u != 64) {
       t = t + String.fromCharCode(r)
      }
      if (a != 64) {
       t = t + String.fromCharCode(i)
      }
     }
     t = Base64._utf8_decode(t);
     return t
    },
    _utf8_encode: function(e) {
     e = e.replace(/rn/g, "n");
     var t = "";
     for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      if (r < 128) {
       t += String.fromCharCode(r)
      } else if (r > 127 && r < 2048) {
       t += String.fromCharCode(r >> 6 | 192);
       t += String.fromCharCode(r & 63 | 128)
      } else {
       t += String.fromCharCode(r >> 12 | 224);
       t += String.fromCharCode(r >> 6 & 63 | 128);
       t += String.fromCharCode(r & 63 | 128)
      }
     }
     return t
    },
    _utf8_decode: function(e) {
     var t = "";
     var n = 0;
     var r = 0, c1 = 0, c2 = 0,c3;
     while (n < e.length) {
      r = e.charCodeAt(n);
      if (r < 128) {
       t += String.fromCharCode(r);
       n++
      } else if (r > 191 && r < 224) {
       c2 = e.charCodeAt(n + 1);
       t += String.fromCharCode((r & 31) << 6 | c2 & 63);
       n += 2
      } else {
       c2 = e.charCodeAt(n + 1);
       c3 = e.charCodeAt(n + 2);
       t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
       n += 3
      }
     }
     return t
    }
   }
export function rsaEncrypt(data) {
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC47pfOTeFlbjjbsfBfSJfSm/OFzAkLuQ14cn9y13y4O19fBUNhAtGZMLA6X7CDfTu5x+OMO32D7fivoG845utUGGUjkyuhXZ9xWxjYyZFR0vKsMqalQqIJQBpgQDB81YQhONhhDPPwyb/hSqrIb51bD6+hVp38aMnhfxc7FD/w4QIDAQAB') // 公钥
    data = JSON.stringify(data)
    // let b = new Base64()
    // data = Base64.encode(data)
    // data = encodeURI(data)
    let getrsaData = encrypt.encryptLong(data)
    return getrsaData
}

export function rsaDecrypt(data) {
    const encrypt = new JSEncrypt()
    encrypt.setPrivateKey('MIICeQIBADANBgkqhkiG9w0BAQEFAASCAmMwggJfAgEAAoGBALjul85N4WVuONux8F9Il9Kb84XMCQu5DXhyf3LXfLg7X18FQ2EC0ZkwsDpfsIN9O7nH44w7fYPt+K+gbzjm61QYZSOTK6Fdn3FbGNjJkVHS8qwypqVCoglAGmBAMHzVhCE42GEM8/DJv+FKqshvnVsPr6FWnfxoyeF/FzsUP/DhAgMBAAECgYEAiIYrr/Qy1+y9MQN2DwHKg4L6DuaILw1YcnkkuaV3v5KlX8LE8VNhZRRapV2LNCc59nco95fbm5ANLarlMT7YryVfvMDwCjgD5L3mz8g30nPZdHUldVeLbj7pUFSLLZXHK5hvtLDba0G+8XQD8VZZSF5Y6D7Vf4kHjJ7+g1TmddkCQQDcuCotvwX4bkWLphRkhTHdn27vw5sGsuvfKrvykcipo+SiL/nW+wt2h+fLaoJH1T6MvSYEYIOoVFrQZ4ztJWMTAkEA1n4CNTIiA6nkRiohg8qdrfUmLYLCHrjvCUtqtCUyCLIkkYS5SQqOq3mnTFIpbCmE3fMSOnO/QoWv9izecY1muwJBAJJCZ5DQ2H/7cpJLh4/kw1p83+J52CzkO3EyvEDNYg8nz8W5zPEsgjgVbwBYn+RB5qUUYjDcU+Ijo9oeBEDRWYkCQQChVbC1cJsTJGP2vtPsvKez5FSuIM+AqlvqItcE34Ft9wj4h9uSbCV6J4xGJPrRR72P8LiCTPPMxp/fTEqZIOHnAkEAyoY9FukmZ4reY3J2S0ECt0n/Qx9A2hDOKA5PmB9m60dosc+RUFMckloVyizidE9rxuPxAFNUn+9k1UR8SAWCfQ==') // 私钥
    let decrsaData = encrypt.decryptLong(data)
    // let b = new Base64()
    // decrsaData = Base64.decode(decrsaData)
    // console.log(data,decrsaData);
    // decrsaData = decodeURIComponent(decrsaData)
    return decrsaData  
}   