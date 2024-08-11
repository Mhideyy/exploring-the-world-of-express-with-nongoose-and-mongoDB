// importing Mongoose
const mongoose = require('mongoose');
// creating a Schema
const userSchema = new mongoose.Schema({
                                             username: {
                                                        type: String,
                                                        required: true,
                                                        unique: true
                                                    },

                                             email: {
                                                        type: String,
                                                        required: true,
                                                        unique: true
                                                    },

                                             password: {
                                                        type: String,
                                                        required: true,
                                                    },

                                             gender: {
                                                        type: String,
                                                        enum: ["male", "female"],
                                                    },

                                             age: {
                                                        type: Number,
                                                        required: true,
                                                    }
                                        },
                                            { timestamps:true }  
                                        );

// creating a model for the schema
const userModel = mongoose.model('USER', userSchema);

// exporting the model with default export
module.exports = userModel;