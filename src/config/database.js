require('dotenv/config');

module.exports = {
  dialect: 'postgres',
<<<<<<< HEAD
  host: process.env.DATABASE_HOST,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
=======
  host: process.env.DATABASE_URL,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: 'gobarber',
>>>>>>> 275ba4d90963b29341e261e42bc15b604ea37247
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
