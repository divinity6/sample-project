const express = require( 'express' );

const menuController = require( '../controllers/menu.js' );

const router = express.Router();

/** menuRoute */
router.get( '/api/getMenu_list' , menuController.getMenu );

module.exports = router;