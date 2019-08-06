/**
 * is-logged-in policy for more changes see config/policies
 */
module.exports = async function (req, res, proceed) {

  if (req.me) {
    return proceed();
  }
  return res.unauthorized();

};
