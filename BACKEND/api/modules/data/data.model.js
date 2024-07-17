const { Schema, model } = require("mongoose");

const dataSchema = Schema({
   end_year: { type: String },
   intensity: { type: Number },
   sector: { type: String },
   topic: { type: String },
   insight: { type: String },
   url: {
      type: String,
      default: "http://www.sustainablebrands.com/news_and_views/supply_chain/sustainable_brands/wri_partnership_aims_foster_supply_chain_transparency"
   },
   region: { type: String },
   start_year: { type: String },
   impact: { type: String },
   added: { type: String },
   published: { type: String },
   country: { type: String },
   relevance: { type: Number },
   pestle: { type: String },
   source: { type: String },
   title: { type: String },
   likelihood: { type: Number },
});

const DataModel = model("Data", dataSchema);
module.exports = { DataModel }

