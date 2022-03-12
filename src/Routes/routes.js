const { Router } = require('express');
const sql = require('../Sql/sql_ejecutar')

const router = Router();

router.post('/add', sql.add_collection)
router.post('/update', sql.update_collection)

module.exports = router;