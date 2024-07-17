require('dotenv').config();
const { createServer } = require('http');
const app = require('./api/app');

const { PORT } = process.env;
createServer(app).listen(PORT, () => {
   console.log(`server is running.. on ${PORT}\n http://127.0.0.1:${PORT}/api/v1`);
})