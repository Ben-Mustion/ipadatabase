const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  app.put('/api/users', async (req, res) => {
    console.log(req);
    const { userName, location } = req.body;

    try {
      await User.findOneAndUpdate(
        { _id: req.user._id },
        { userName: userName, location: location },
        {
          runValidators: true,
          context: 'query',
          new: true,
          useFindAndModify: false,
        }
      );
      res.json({
        result: 'success',
        message: 'Profile Updated Successfully!',
      });
    } catch (err) {
      res.json({ result: 'error', message: 'Username Already Taken' });
    }
  });
};
