// const Joi = require('joi');

// const passwordSchema = Joi.string().alphanum().min(3).max(10).alphanum();
// console.log('passwordSchema', passwordSchema.validate('fbfdb##'));

const shortid = require('shortid');
console.log('shortid', shortid.generate());
