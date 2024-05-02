import Joi from 'joi';

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  gender?: string;
  dob?: string;
  delete?: boolean;
}

export const userParamsDto = Joi.object({
  id: Joi.string().length(36).required(),
});

export const userQueryDto = Joi.object({
  take: Joi.optional(),
  skip: Joi.optional(),
});

export const userDto = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  countryCode: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  gender: Joi.string().valid('male', 'female').optional().empty(),
  dob: Joi.string().optional().optional().pattern(/^(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[01])-202([2-9])$/).empty(),
});