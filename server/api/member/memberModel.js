import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: String,
    lastName: String
});

const memberModel = mongoose.model('member', memberSchema);

export { memberModel };