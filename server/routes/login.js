const express = require( 'express' );

const loginController = require( '../controllers/login.js' );

const router = express.Router();


/** menuRoute */
router.post( '/api/userLogin' , loginController.postUserLogin );

router.get( '/api/userLogout' , loginController.getUserLogout );

module.exports = router;