const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  app.put('/api/users', async (req, res) => {
    const { userName, location, _id } = req.body;

    User.findOneAndUpdate(
      { _id: _id },
      { userName: userName, location: location },
      {
        runValidators: true,
        context: 'query',
        new: true,
        useFindAndModify: false,
      },
      (err, doc) => {
        if (err) {
          return res.status(500).send(err);
          //console.log(err.errors.userName.message);
          //return res.status(500).send(err.errors.userName.);
        }
        return res.status(200).send(doc);
      }
    );
  });
};
