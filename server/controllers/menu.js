const fs = require( 'fs' );
const path = require( 'path' );



const getMenuFromFile = ( callback ) => {
  const _path = path.join(
    path.dirname( process.mainModule.filename ) ,
    'data' ,
    'menu.json'
  );

  fs.readFile( _path ,'utf-8' ,( err, fileContent ) => {
    let menu = [];
    if ( !( err ) ){
      menu = JSON.parse( fileContent );
    }

    callback( menu , _path );
  } );
}


/**
 * - 테스트 메뉴 데이터
 * @param req
 * @param res
 * @param next
 */
exports.getMenu = ( req , res ) => {
  getMenuFromFile( ( menuList ) => {
    console.log( "<</api/getMenu>>");
    res.status( 200 ).send( menuList );
  } );


}
