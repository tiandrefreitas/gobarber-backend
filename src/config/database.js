	require('dotenv/config');

module.exports = {
  dialect: 'postgres',
<<<<<<< HEAD
  host: process.env.DATABASE_URL,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: 'gobarber',
=======
  host: process.env.DATABASE_HOST,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
>>>>>>> f50c2e595ae5a12cf264d526fa7fcfe9c4e3c897
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
