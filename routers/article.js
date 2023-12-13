const express = require('express')
const router = express.Router()
const { index, show, update, create, destroy} = require('../controllers/article')



router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.delete('/:id', destroy)
router.patch('/:id', update)

module.exports = router


