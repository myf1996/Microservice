const dotenv = require('dotenv');
dotenv.config();

const defaultEnvironment = 'development'

export const systemConfig = { 
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || defaultEnvironment,
  base_path: process.env.BASE_PATH || 'user-service',
}