exports.HelloGet = (req, res) => {
  res.status(200).json({ status: 'true', message: 'This is from Hello GET' });
};
exports.HelloPost = (req, res) => {
  res.status(200).json({ status: 'true', message: 'This is from Hello POST' });
};
