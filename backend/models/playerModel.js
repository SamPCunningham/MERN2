import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    }
})