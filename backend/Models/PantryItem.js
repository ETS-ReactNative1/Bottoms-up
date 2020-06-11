//======================================================
// Dependencies
//======================================================

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//======================================================
// GroceryList Model
//======================================================

const pantryItemSchema = new Schema({
   
    title: { 
      type: String,
       required: true
    },
    amount: {
       type: Number, 
       required: true 
    }
});

const PantryItem = mongoose.model("PantryItem", PantryItemSchema);

module.exports = PantryItem;