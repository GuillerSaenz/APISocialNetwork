const dateFormatter = (timestamp) => {
	return new Date(timestamp).toLocaleDateString();
};

module.exports = { dateFormatter };