const { Thought, User } = require("../models");

function getThoughts(req, res) {
	Thought.find()
		.then((thoughts) => res.status(200).json(thoughts))
		.catch((err) => res.status(500).json(err));
}

function getSingleThought(req, res) {
	Thought.findOne({ _id: req.params.thoughtId })
		.then((thought) => (!thought ? res.status(404).json({ message: "Thought not found" }) : res.status(200).json(thought)))
		.catch((err) => res.status(500).json(err));
}

function createThought(req, res) {
	Thought.create(req.body)
		.then((thought) => User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: { thoughts: thought._id } }, { new: true }))
		.then((user) => (!user ? res.status(404).json({ message: "Thought created, but user not found" }) : res.status(201).json("Thought created")))
		.catch((err) => res.status(500).json(err));
}

function updateThought(req, res) {
	Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
		.then((thought) => (!thought ? res.status(404).json({ message: "Thought not found" }) : res.status(200).json(thought)))
		.catch((err) => res.status(500).json(err));
}

function deleteThought(req, res) {
	Thought.findOneAndDelete({ _id: req.params.thoughtId })
		.then((thought) =>
			!thought
				? res.status(404).json({ message: "Thought not found" })
				: User.findOneAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } }, { new: true })
		)
		.then((user) =>
			!user ? res.status(404).json({ message: "Thought deleted, but user not found" }) : res.status(200).json({ message: "Thought deleted" })
		)
		.catch((err) => res.status(500).json(err));
}

function addReaction(req, res) {
	Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { new: true })
		.then((thought) => (!thought ? res.status(404).json({ message: "Thought not found" }) : res.status(201).json(thought)))
		.catch((err) => res.status(500).json(err));
}

function removeReaction(req, res) {
	Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true })
		.then((thought) => (!thought ? res.status(404).json({ message: "Thought not found" }) : res.status(200).json(thought)))
		.catch((err) => res.status(500).json(err));
}

module.exports = {
	getThoughts,
	getSingleThought,
	createThought,
	updateThought,
	deleteThought,
	addReaction,
	removeReaction,
};