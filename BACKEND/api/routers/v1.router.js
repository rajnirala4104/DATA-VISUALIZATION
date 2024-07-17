const { Router } = require('express');
const expressAsyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const { dataRouter } = require('../modules/data/data.routes');


const v1 = Router();

v1.use('/data', dataRouter);
v1.get('/', expressAsyncHandler(async (req, res) => {
   res.status(StatusCodes.OK).json({
      message: "Running..",
      status: StatusCodes.OK
   })
}))

module.exports = { v1 }