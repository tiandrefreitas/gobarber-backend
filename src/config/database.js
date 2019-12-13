require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
