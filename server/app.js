const path = require("path");
const express = require( 'express' );
const cookieParser = require( 'cookie-parser' );
const expressSession = require( 'express-session' );
const MemoryStore = require( 'memorystore' )( expressSession );
const bodyParser = require( 'body-parser' );

const app = express();
const menuRoutes = require( './routes/menu.js' );
const loginRoutes = require( './routes/login.js' );

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended : false } ) );

app.use( cookieParser() );

const maxAge = 1000 * 60 * 5;
app.use( expressSession( {
  secret : 'hoon',
  resave : false,
  saveUninitialized : false,
  store : new MemoryStore( { checkPeriod : maxAge } ),
  cookie : { maxAge }
} ) );

app.use( express.static( path.join( __dirname , 'public' ) ) );

app.use( loginRoutes );

app.use( menuRoutes );

app.use( ( req , res ) => {
  res.status( 404 ).json( { errorMessage : 404 } );
} )

const PORT = 2307;

app.listen( PORT );
console.log( "<<startServer PORT>>" , PORT );