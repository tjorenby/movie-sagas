const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const getGenresQuery = `SELECT * FROM "genres";`;

  pool.query(getGenresQuery)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.error('Error completing GET GENRE query', err);
      res.sendStatus(500);
    });
});

module.exports = router;