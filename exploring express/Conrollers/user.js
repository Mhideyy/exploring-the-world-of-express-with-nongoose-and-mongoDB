// importing the model
const userModel = require('../Model/user');

// getting all users
const getUsers = async (req,res) => {
    try {
        const allUser = await userModel.find().sort({ createdAt: -1 });
        res.json(allUser);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// registering new user
const postUser = async (req,res) => {
    const body = req.body;
    try {
        const newUser = new userModel(body);
        console.log(newUser);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// editing a user profile
const editUser = async (req,res) => {
    const { id, age } = req.body;
    try {
        const editedUser = await userModel.findByIdAndUpdate(id, {age}, {new:true} );
        res.json(editedUser);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// deleting a user
const deleteUser = async (req,res) => {
    const { id } = req.body;
    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// exporting the functions with name export
module.exports = { getUsers, postUser, editUser, deleteUser };