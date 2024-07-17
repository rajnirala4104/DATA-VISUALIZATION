const expressAsyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { DataModel } = require("./data.model");
const dummyData = require('../../data/jsondata.json')

const dataController = {
   getAllTheData: expressAsyncHandler(async (req, res) => {
      try {

         const data = await DataModel.find({});
         if (data.length === 0) await DataModel.create([...dummyData])

         res.status(StatusCodes.OK).json({
            message: 'all the data',
            data: data
         })

      } catch (error) {
         res.status(StatusCodes.INTERNAL_SERVER_ERROR)
         throw new Error(error.message)
      }
   }),

   searchData: expressAsyncHandler(async (req, res) => {
      try {


         // Object.fromEntries(Object.entries(req.query).filter(([_, v]) => v != ''))

         const data = await DataModel.find(req.query);

         res.status(StatusCodes.OK).json({
            message: "filtered",
            data: data
         })

      } catch (error) {
         res.status(StatusCodes.INTERNAL_SERVER_ERROR)
         throw new Error(error.message);
      }
   }),
   distinctValues: expressAsyncHandler(async (req, res) => {
      try {
         const { key } = req.params;
         const response = await DataModel.distinct(key);
         res.status(StatusCodes.OK).json({
            message: "Distinct values",
            data: response
         })

      } catch (error) {
         res.status(StatusCodes.INTERNAL_SERVER_ERROR);
         throw new Error(error.message);
      }
   })

}

module.exports = { dataController }