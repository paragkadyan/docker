import crypto from "crypto"

const SECRET = "buildbyParag"

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt, password) => {
    const hmac = crypto.createHmac('sha256', SECRET);
    hmac.update(`${salt}/${password}`);
    return hmac.digest('hex');
};