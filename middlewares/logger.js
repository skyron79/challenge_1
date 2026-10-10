const log = (req, res, next) => {
  console.log('Request received at: ' + new Date().toISOString());
  next();
}

export default log;