// 简易AES加密解密（CryptoJS精简版）
// 需引入CryptoJS库：https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// 用于前端加密标注数据

function encryptAES(text, password) {
    return CryptoJS.AES.encrypt(text, password).toString();
}

function decryptAES(cipher, password) {
    try {
        const bytes = CryptoJS.AES.decrypt(cipher, password);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (e) {
        return '';
    }
}
