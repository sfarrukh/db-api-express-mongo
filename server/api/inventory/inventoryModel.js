import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    productName: String,
    brand: String,
    description: String,
    avgStar: Number,
    inStock: Boolean
});

const inventoryModel = mongoose.model('inventory', inventorySchema);

export { inventoryModel };