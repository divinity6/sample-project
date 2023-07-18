const fs = require( 'fs' );
const path = require( 'path' );

const getMenuFromFile = ( callback ) => {
  const _path = path.join(
    path.dirname( process.mainModule.filename ) ,
    'data' ,
    'loginInfo.json'
  );

  fs.readFile( _path ,'utf-8' ,( err, fileContent ) => {
    let loginInfo = {};
    if ( !( err ) ){
      loginInfo = JSON.parse( fileContent );
    }

    callback( loginInfo , _path );
  } );
}

/**
 * - 테스트 로그인 데이터
 * @param req
 * @param res
 * @param next
 */
exports.postUserLogin = ( req , res ) => {

  const { id , pw } = req.body;

  if ( 'test1' !== id || '1234' !== pw ){
    res.status( 200 ).send( { errorMessage : '아이디 및 패스워드가 잘못되었습니다' , status : 'fail' } );
    return;
  }

  if ( req.session.user ){
    res.status( 200 ).send( { errorMessage : '이미 로그인 되었습니당' , status : 'login' } );
    return;
  }

  getMenuFromFile( ( loginInfo ) => {

    req.session.user = {
      ...loginInfo,
      id,
      pw,
    }

    console.log( "<</api/userLogin>>" );

    res.status( 200 ).send( { ...loginInfo , status : 'login' } );
  } )
}

exports.getUserLogout = ( req , res ) => {
  req.session.destroy( () => {
    console.log( "<</api/userLogout>>" );
    res.clearCookie( 'connect.sid' );
    res.status( 200 ).send( { errorMessage : '로그아웃 되었습니당' , status : 'logout' } );
  } );
}