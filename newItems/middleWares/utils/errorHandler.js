const errorHandler = async (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'failed to reach';
  let details = err.details || 'failed to reach it details | manually check it';
  
  console.log('>>>>>> ', Object.values(err));
  console.error(`❌ ${err.message}`);
  
  if(err.name === 'ValidationError'){
    details = Object.values(err.errors).map((e)=>{
      return {
        type:e.path,
        "message":e.message,
        "kind": e.kind,
        "value": e.value
      }

    })
    
  }

  res.status(status).json({
    success: false,
    ErrorName:err.name,
    message,
    details,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });

}

module.exports = {errorHandler}