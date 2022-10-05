// export default 5;
// дефолтный экспорт

import Joi from 'joi';
// console.log('Joi', Joi);

const passSchema = Joi.string().min(3).max(10);

export default function validatePassword(password) {
    return passSchema.validate(password);
}
