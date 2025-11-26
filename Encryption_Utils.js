const crypto = require("crypto");

const SECRET_KEY = "12345678901234567890123456789012"; // must be 32 bytes
const IV = "1234567890123456"; // must be 16 bytes

const SECRET_KEY_buffer = Buffer.from(SECRET_KEY, "utf8");
const IV_buffer = Buffer.from(IV, "utf8");

// Encrypt Function
module.exports.encryptAES = (text) => {
  const cipher = crypto.createCipheriv("aes-256-cbc", SECRET_KEY_buffer, IV_buffer);

  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");

  return {
    iv: IV_buffer.toString("base64"),  // Corrected
    data: encrypted
  };
};

// Decrypt Function
module.exports.decryptAES = (encryptedData, ivBase64) => {
  const iv = Buffer.from(ivBase64, "base64");

  const decipher = crypto.createDecipheriv("aes-256-cbc", SECRET_KEY_buffer, iv);

  let decrypted = decipher.update(encryptedData, "base64", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};
