const { User, Thought } = require("../models");

function getUsers(req, res) {
	User.find()
		.then((users) => res.status(200).json(users))
		.catch((err) => res.status(500).json(err));
}

function getSingleUser(req, res) {
	User.findOne({ _id: req.params.userId })
		.populate("thoughts")
		.populate("friends")
		.then((user) => (!user ? res.status(404).json({ message: "User not found" }) : res.status(200).json(user)))
		.catch((err) => res.status(500).json(err));
}

function createUser(req, res) {
	User.create(req.body)
		.then((user) => res.status(201).json(user))
		.catch((err) => res.status(500).json(err));
}

function updateUser(req, res) {
	User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
		.then((user) => (!user ? res.status(404).json({ message: "User not found" }) : res.status(200).json(user)))
		.catch((err) => res.status(500).json(err));
}

function deleteUser(req, res) {
	User.findOneAndDelete({ _id: req.params.userId })
		.then((user) => (!user ? res.status(404).json({ message: "User not found" }) : Thought.deleteMany({ _id: { $in: user.thoughts } })))
		.then(() => res.status(200).json({ message: "User and associated thoughts deleted" }))
		.catch((err) => res.status(500).json(err));
}

function addFriend(req, res) {
	User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
		.then((user) => (!user ? res.status(404).json({ message: "User not found" }) : res.status(201).json(user)))
		.catch((err) => res.status(500).json(err));
}

function removeFriend(req, res) {
	User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
		.then((user) => (!user ? res.status(404).json({ message: "User not found" }) : res.status(200).json(user)))
		.catch((err) => res.status(500).json(err));
}

module.exports = {
	getUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	removeFriend,
};