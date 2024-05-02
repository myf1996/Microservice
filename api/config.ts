const dotenv = require('dotenv');
dotenv.config();

const defaultEnvironment = 'development'

export const systemConfig = { 
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || defaultEnvironment,
  base_path: process.env.BASE_PATH || 'user-service',
  database: {
    db_host: process.env.DB_HOST,
    db_port: 3306,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_database: process.env.DB_DATABASE,
    db_synchronize: process.env.NODE_ENV || 'development' === defaultEnvironment ? true : false,
    fetch_data_with_deleted: false,
  },
  aws: {
    access_key_id: process.env.AWS_ACCESS_KEY_ID,
    secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucket_name: process.env.AWS_BUCKET_NAME,
  },
}