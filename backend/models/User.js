const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  googleId: String,
  userName: {
    type: String,
    minlength: 2,
    maxlength: 15,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  location: String,
});

userSchema.plugin(uniqueValidator);
mongoose.model('users', userSchema);
