const admin = (req, res, next) => {
  console.log(req.headers)
  console.log("the auth ",req.headers.authorization)
    if (req.headers.authorization==="true") {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized as an admin')
    }
  }
module.exports={admin};