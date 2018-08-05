import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

memberSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    bcrypt.hash(this.password, 10)
        .then((hash) => {
            this.password = hash;
            next();
        })
        .catch((err) => {
            err.message;
        })
    // next() // putting 'next()' down here did not save password in db
})

const memberModel = mongoose.model('member', memberSchema);

export { memberModel };