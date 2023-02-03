const User = require('../models/User')

module.exports = {
    readUsers : async (req, res) => {
        const users = await User.find();
        return res.status(200).json(users);
    },

    readUser : async (req, res) => {
        const id = req.params.id;
        const user = await User.findById(id);
        return res.status(200).json(user);
    },

    createUser : async (req, res) => {
        let body = { ...req.body };
        const user = new User(body);
        const createdUser = await user.save();
        return res.status(201).json(createdUser);
    },

    updateUser : async (req, res) => {
        const id = req.params.id;
        await User.updateOne({_id : id}, req.body);
        const updatedUser = await User.findById(id);
        return res.status(200).json(updatedUser);
    },

    deleteUser : async (req, res) => {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);
        return res.status(200).json(deletedUser);
    }

}