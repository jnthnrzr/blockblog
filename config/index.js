require('dotenv').load();
const mongoUrl = process.env.mongoUrl;

export default {
    "port": 3015,
    "mongoUrl": mongoUrl,
    "bodyLimit": "100kb"
}