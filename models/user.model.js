const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userId: { type: String, required: [true, 'User id is required'] },
  name: { type: String, required: [true, 'Name is required!'] },
  fatherName: { type: String, required: [true, 'Father name is required!'] },
  motherName: { type: String, required: [true, 'Mather name is required!'] },
  address: { type: String, required: [true, 'Address name is required!'] },
  issueDate: { type: String, required: [true, 'Issue Date is required!'] },
  certificate: { type: String, required: [true, 'Certificate is required!'] },
});

module.exports = model('User', userSchema, 'users');
