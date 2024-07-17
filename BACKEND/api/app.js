const express = require('express');
const { v1 } = require('./routers/v1.router');
const asyncHandler = require('express-async-handler')
const { StatusCodes } = require('http-status-codes')
const cors = require('cors');
const { erroHandler, notFoundErr } = require('./middelwares/error');
const connectDatabase = require('./configs/databaseConnection');
connectDatabase();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

app.use('/api/v1', v1);
app.get('/test', asyncHandler(async (req, res) => {
   res.status(StatusCodes.OK).json({
      message: "API is running"
   })
}))

app.use(erroHandler)
app.use(notFoundErr)

module.exports = app;